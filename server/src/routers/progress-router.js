// Kerim

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const progressesRouter = express.Router();



progressesRouter.post("/progress/student/:studentRegistration", async (req, res) => {
  try {
    const { studentRegistration } = z
      .object({ studentRegistration: z.string().length(9)})
      .parse(req.params);

      //Active Survey
      const [surveys] = await pool.query(
        "SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate"
      );
      if (surveys.length < 1) {
        throw new Error("There are no active surveys");
      }
      const [survey] = surveys;
      console.log(survey)


      const [rows] = await pool.query(`
      SELECT 
        c.crn, c.code AS courseCode, c.title AS courseTitle, c.kind AS courseKind, q.id AS questionId, q.section AS questionSection, a.content AS answerContent, t.registration AS teacherRegistration, t.fullName AS teacherFullName
      FROM 
        Student s JOIN Enrolled e ON s.registration = e.studentRegistration
        JOIN Classroom c ON e.crn = c.crn JOIN Teaches tc ON c.crn = tc.crn
        JOIN Teacher t ON tc.teacherRegistration = t.registration
        LEFT JOIN SurveyQuestion sq ON sq.targetKind = c.kind
        LEFT JOIN Question q ON sq.questionId = q.id
        LEFT JOIN Answer a ON a.surveyQuestionId = sq.id AND a.targetKind = sq.targetKind AND a.crn = c.crn AND a.teacherRegistration = t.registration
        WHERE s.registration = ?
    `, [studentRegistration]);

    // Temporary data structures
    const courses = {};
    const blocks = {};
    const teachers = {};

    // Processing each row from the query
    for (const row of rows) {
      const courseId = row.crn;
      const courseName = row.courseTitle;
      const courseKind = row.courseKind;
      const questionId = row.questionId;
      const questionSection = row.questionSection;
      const answerContent = row.answerContent;
      const teacherId = row.teacherRegistration;
      const teacherName = row.teacherFullName;
    
      // Course
      if (!courses[courseId]) {
        courses[courseId] = {
          courseName,
          questionsAnswered: 0,
          kind: courseKind,
          completed: false
        };
      }

      if (answerContent) {
        courses[courseId].questionsAnswered++;
      }

      if (courses[courseId].questionsAnswered === output[courseKind].questionAmount) {
        courses[courseId].completed = true;
      }

      //Blocks
      if (courseKind === 'BLOCK') {
        if (!blocks[courseId]) {
            blocks[courseId] = {
            courseName,
            questionsAnswered: 0,
            kind: courseKind,
            completed: false
          };
        }

        if (answerContent) {
          blocks[courseId].questionsAnswered++;
        }
        if (blocks[courseId].questionsAnswered === output.BLOCK.questionAmount){
          blocks[courseId].completed = true;
        }
      }

      //Teacher
      if (!teachers[teacherId]) {
        teachers[teacherId] = {
            teacherName,
            questionsAnswered: 0,
            completed: false
          };
        }
        if (answerContent) {
          teachers[teacherId].questionsAnswered++;
        }
        if (teachers[teacherId].questionsAnswered === output.TEACHER.questionAmount) {
          teachers[teacherId].completed = true;
          }
        }

      // Completing output object with processed data
    output.COURSES.progress = Object.values(courses);
    output.BLOCK.progress = Object.values(blocks);
    output.TEACHER.progress = Object.values(teachers);

    // Calculating completion status of each category
    output.COURSES.completed = output.COURSES.progress.every(course => course.completed);
    output.BLOCK.completed = output.BLOCK.progress.every(block => block.completed);
    output.TEACHER.completed = output.TEACHER.progress.every(teacher => teacher.completed);

    console.log (output);
      
      

      
      //Testing start
      
    // query de todos los datos
    //fors
    // loop que mete datos dentro de progress

    {	
      "courseName": "",
      "questionsAnswered": 0,
      "kind": "",
      "completed": false
    }

    const output = { 
      "COURSES": 
      {
        "questionAmount": 0,
        "completed": false,
        progress: [
          {	
            "courseName": "",
            "questionsAnswered": 0,
            "kind": "",
            "completed": false
          },
        ]
      },
      "BLOCK": 
      {
        "questionAmount": 16,
        "completed": false,
        progress: [
          {	
            "courseName": "",
            "questionsAnswered": 14,
            "kind": "COURSE",
            "completed": false
          },
          {
            "courseName": "imp de metodos",
            "questionsAnswered": 14,
            "kind": "BLOCK",
            "completed": false
          }
        ]
      },
      "TEACHER": 
      {
        "questionAmount": 16,
        "completed": true,
        progress: [
          {
            "teacherName": "carmen leticia",
            "questionsAnswered": 14,
            "completed": false
          }
        ]
      }
   };

    res.status(200).send(output);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default progressesRouter;
