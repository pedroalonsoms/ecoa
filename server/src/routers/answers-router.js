import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { TARGET_KIND } from "../utils/constants.js";

const answersRouter = express.Router();

answersRouter.get("/answers/:studentRegistration", async (req, res) => {
  try {
    const { studentRegistration } = z
      .object({
        studentRegistration: z.string().length(9),
      })
      .parse(req.params);

    const [rows] = await pool.query(
      `SELECT TmpAnswer.*, SurveyQuestion.questionId FROM TmpAnswer JOIN SurveyQuestion ON TmpAnswer.surveyQuestionId = SurveyQuestion.id WHERE TmpAnswer.studentRegistration = ? ORDER BY TmpAnswer.id ASC`,
      [studentRegistration]
    );

    if (rows.length === 0) {
      throw new Error("No answers found for the given student registration");
    }

    return res.status(200).send(rows);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

answersRouter.post("/answers/:studentRegistration", async (req, res) => {
  try {
    const { studentRegistration } = z
      .object({
        studentRegistration: z.string().length(9),
      })
      .parse(req.params);

    const { questionId, targetKind, teacherRegistration, crn, content } = z
      .object({
        questionId: z.number(),
        targetKind: z.enum(TARGET_KIND),
        teacherRegistration: z.string().length(9).nullable(),
        crn: z.number().nullable(),
        content: z.string(),
      })
      .parse(req.body);

    // TODO: add validation for content to be between 0 - 10 when answer is numeric

    if (targetKind === "TEACHER_REGISTRATION" && teacherRegistration === null) {
      throw new Error(
        "Teacher registration cannot be null when targetKind is TEACHER_REGISTRATION"
      );
    }

    if (targetKind === "CRN" && crn === null) {
      throw new Error("CRN cannot be null when targetKind is CRN");
    }

    const [surveyQuestions] = await pool.query(
      `SELECT id 
      FROM SurveyQuestion 
      WHERE questionId = ? 
      AND surveyId = (
        SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate
      )`,
      [questionId]
    );

    if (surveyQuestions.length === 0) {
      throw new Error(
        "Question with given id was not found within the active survey"
      );
    }

    const surveyQuestion = surveyQuestions[0];

    await pool.query(`INSERT INTO TmpAnswer VALUES (NULL, ?, ?, ?, ?, ?, ?)`, [
      studentRegistration,
      surveyQuestion.id,
      targetKind,
      teacherRegistration,
      crn,
      content,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default answersRouter;
