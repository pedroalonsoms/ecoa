// Kerim

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const progressRouter = express.Router();

progressRouter.post(
  "/progress/student/:studentRegistration",
  async (req, res) => {
    try {
      const { studentRegistration } = z
        .object({ studentRegistration: z.string().length(9) })
        .parse(req.params);

      // Active Survey
      const [surveys] = await pool.query(
        "SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate"
      );

      if (surveys.length < 1) {
        throw new Error("There are no active surveys");
      }

      const [survey] = surveys;

      // Course Progress
      const [courseProgress] = await pool.query(
        `SELECT
        Classroom.title AS courseName,
        Classroom.kind AS kind,
        COUNT(Classroom.crn) AS questionsAnswered,
        (SELECT COUNT(*) FROM Question WHERE section = kind) AS questionAmount
        FROM Classroom
        LEFT JOIN TmpAnswer
        ON Classroom.crn = TmpAnswer.crn
        AND TmpAnswer.targetKind = 'CRN'
        AND TmpAnswer.studentRegistration = ?
        WHERE
        Classroom.isActive = TRUE
        AND Classroom.crn IN (
          SELECT crn
          FROM Enrolled
          WHERE studentRegistration = ?
        )
        GROUP BY Classroom.crn`,
        [studentRegistration, studentRegistration]
      );

      res.send(courseProgress);
      return;

      // Teacher progress
      const [teacherProgress] = await pool.query(
        `
      SELECT t.fullName, COUNT(DISTINCT a.id) AS questionsAnswered
      FROM Teacher t
      INNER JOIN Teaches tc ON t.registration = tc.teacherRegistration
      INNER JOIN Classroom c ON tc.crn = c.crn
      INNER JOIN Question q ON q.section LIKE CONCAT(c.code, '%')
      LEFT JOIN Answer a ON a.studentRegistration = ? AND a.surveyQuestionId IN (
        SELECT sq.id FROM SurveyQuestion sq WHERE sq.surveyId = ?
      ) AND q.id = a.surveyQuestionId AND a.teacherRegistration = t.registration
      WHERE c.isActive = true
      GROUP BY t.fullName
    `,
        [studentRegistration, survey.id]
      );

      // Format Response
      const response = {
        COURSES: {
          questionAmount: 0,
          completed: false,
          progress: [],
        },
        BLOCK: {
          questionAmount: 0,
          completed: false,
          progress: [],
        },
        TEACHER: {
          questionAmount: 0,
          completed: false,
          progress: [],
        },
      };

      for (const course of courseProgress) {
        const section = course.section.split(" ")[1];
        const existingProgress = response.COURSES.progress.find(
          (p) => p.kind === section
        );

        const completed = course.questionsAnswered === course.questionAmount;

        if (existingProgress) {
          existingProgress.questionsAnswered += course.questionsAnswered;
          existingProgress.completed = existingProgress.completed && completed;
        } else {
          response.COURSES.progress.push({
            courseName: course.title,
            questionsAnswered: course.questionsAnswered,
            kind: section,
            completed,
          });
        }
        response.COURSES.questionAmount += course.questionAmount;
        response.COURSES.completed = response.COURSES.completed || completed;
      }

      for (const block of blockProgress) {
        const existingProgress = response.BLOCK.progress.find(
          (p) => p.kind === block.section
        );
        const completed =
          block.questionsAnswered === response.BLOCK.questionAmount;
        if (existingProgress) {
          existingProgress.questionsAnswered += block.questionsAnswered;
          existingProgress.completed = existingProgress.completed && completed;
        } else {
          response.BLOCK.progress.push({
            courseName: "",
            questionsAnswered: block.questionsAnswered,
            kind: block.section,
            completed,
          });
        }
        response.BLOCK.completed = response.BLOCK.completed || completed;
      }

      for (const teacher of teacherProgress) {
        const existingProgress = response.TEACHER.progress.find(
          (p) => p.teacherName === teacher.fullName
        );
        const completed =
          teacher.questionsAnswered === response.TEACHER.questionAmount;
        if (existingProgress) {
          existingProgress.questionsAnswered += teacher.questionsAnswered;
          existingProgress.completed = existingProgress.completed && completed;
        } else {
          response.TEACHER.progress.push({
            teacherName: teacher.fullName,
            questionsAnswered: teacher.questionsAnswered,
            completed,
          });
        }
        response.TEACHER.completed = response.TEACHER.completed || completed;
      }

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

export default progressRouter;
