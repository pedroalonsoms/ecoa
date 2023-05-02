// Kerim

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const progressRouter = express.Router();

progressRouter.get(
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
        throw new Error("There is no active survey");
      }

      const [survey] = surveys;

      // Course Progress
      const [formationUnitsProgress] = await pool.query(
        `SELECT
        Classroom.crn AS crn,
        Classroom.title AS title,
        Classroom.kind AS kind,
        COUNT(Classroom.crn) AS questionsAnswered,
        (
          SELECT 
          COUNT(*) 
          FROM SurveyQuestion
          JOIN Question 
          ON SurveyQuestion.questionId = Question.id
          WHERE SurveyQuestion.surveyId = ? 
          AND Question.section = kind
        ) AS questionAmount
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
        [survey.id, studentRegistration, studentRegistration]
      );

      // Teacher progress
      const [teachersProgress] = await pool.query(
        `SELECT 
        Teacher.registration AS registration,
        Teacher.fullName AS fullName,
        COUNT(Teacher.registration) AS questionsAnswered,
        (
          SELECT 
          COUNT(*) 
          FROM SurveyQuestion
          JOIN Question 
          ON SurveyQuestion.questionId = Question.id
          WHERE SurveyQuestion.surveyId = ? 
          AND Question.section = 'TEACHER'
        ) AS questionAmount
        FROM Teacher
        LEFT JOIN TmpAnswer
        ON Teacher.registration = TmpAnswer.teacherRegistration
        AND TmpAnswer.targetKind = 'TEACHER_REGISTRATION'
        AND TmpAnswer.studentRegistration = ?
        WHERE Teacher.registration IN (
          SELECT teacherRegistration
          FROM Teaches
          WHERE crn IN (
            SELECT Enrolled.crn
            FROM Enrolled
            JOIN Classroom
            ON Enrolled.crn = Classroom.crn
            WHERE studentRegistration = ? AND Classroom.isActive = TRUE
          ) 
        )
        GROUP BY Teacher.registration
        `,
        [survey.id, studentRegistration, studentRegistration]
      );

      const sumByKey = (progressArray, key) => {
        return progressArray.reduce(
          (accumulator, item) => accumulator + item[key],
          0
        );
      };

      res.status(200).send({
        FORMATION_UNITS: {
          totalQuestionAmount: sumByKey(
            formationUnitsProgress,
            "questionAmount"
          ),
          totalQuestionsAnswered: sumByKey(
            formationUnitsProgress,
            "questionsAnswered"
          ),
          progress: formationUnitsProgress,
        },
        TEACHERS: {
          totalQuestionAmount: sumByKey(teachersProgress, "questionAmount"),
          totalQuestionsAnswered: sumByKey(
            teachersProgress,
            "questionsAnswered"
          ),
          progress: teachersProgress,
        },
      });
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

export default progressRouter;
