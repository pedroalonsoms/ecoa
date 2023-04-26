import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const answersRouter = express.Router();

// GET /answers/:studentId/questions/:questionId
answersRouter.get("/answers/:studentRegistration/questions/:questionId", async (req, res) => {
  try {
    const { studentRegistration, questionId } = z
      .object({
        studentRegistration: z.string().length(9),
        questionId: z.string().transform((s) => parseInt(s)),
      })
      .parse(req.params);

    const { rows } = await pool.query(
      `SELECT * FROM TmpAnswer JOIN SurveyQuestion ON TmpAnswer.surveyQuestionId = SurveyQuestion.id WHERE studentRegistration = ? AND SurveyQuestionId.questionId = ?`,
      [studentRegistration, questionId]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST /answers/:studentId/questions/:questionId
answersRouter.post("/answers/:studentRegistration/questions/:questionId", async (req, res) => {
  try {
    const { studentRegistration, questionId } = z
      .object({
        studentRegistration: z.string().length(9) ,
        questionId: z.string().transform((s) => parseInt(s)),
      })
      .parse(req.params);


    const { targetKind, teacherRegistration, crn, content } = z
      .object({
        targetKind: z.string(),
        teacherRegistration: z.string().nullable(),
        crn: z.number().nullable(),
        content: z.string(),
      })
      .parse(req.body);

    await pool.query(
      `INSERT INTO TmpAnswer (studentRegistration, surveyQuestionId, targetKind, teacherRegistration, crn, content) VALUES (?, ?, ?, ?, ?, ?)`,
      [studentRegistration, questionId, targetKind, teacherRegistration, crn, content]
    );

    await pool.query(`CALL transferTmpAnswersByStudentRegistration(?)`, [studentRegistration]);

    res.status(201).json({ message: "Answer created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default answersRouter;
