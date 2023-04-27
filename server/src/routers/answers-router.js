import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { TARGET_KIND } from "../utils/constants.js";

const answersRouter = express.Router();

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

    if (rows.length === 0) {
      res.status(400).send({ error: "The requested question has not been answered." });
    } else {
      res.status(200).send(rows);
    }  
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
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
        targetKind: z.enum(TARGET_KIND),
        teacherRegistration: z.string().nullable().refine(value => value !== null, {
          message: "teacherRegistration must not be null",
        }),
        crn: z.number().nullable(),
        content: z.string(),
      })
      .parse(req.body);

    await pool.query(
      `INSERT INTO TmpAnswer (studentRegistration, surveyQuestionId, targetKind, teacherRegistration, crn, content) VALUES (?, ?, ?, ?, ?, ?)`,
      [studentRegistration, questionId, targetKind, teacherRegistration, crn, content]
    );

    res.status(200).send({ message: "Answer created successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default answersRouter;
