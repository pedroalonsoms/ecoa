import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { TARGET_KIND } from "../utils/constants.js";

const answersRouter = express.Router();

answersRouter.get(
  "/answers/:studentRegistration/surveyQuestions/:surveyQuestionId",
  async (req, res) => {
    try {
      const { surveyQuestionId, studentRegistration } = z
        .object({
          studentRegistration: z.string().length(9),
          surveyQuestionId: z.string().transform((s) => parseInt(s)),
        })
        .parse(req.params);

      const [answers] = await pool.query(
        `SELECT content 
      FROM TmpAnswer 
      WHERE studentRegistration = ? 
      AND surveyQuestionId = ?`,
        [studentRegistration, surveyQuestionId]
      );

      if (answers.length === 0) {
        throw new Error("No answer found");
      }

      const answer = answers[0];

      return res.status(200).send(answer);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

answersRouter.post(
  "/answers/:studentRegistration/surveyQuestions/:surveyQuestionId",
  async (req, res) => {
    try {
      const { surveyQuestionId, studentRegistration } = z
        .object({
          studentRegistration: z.string().length(9),
          surveyQuestionId: z.string().transform((s) => parseInt(s)),
        })
        .parse(req.params);

      const { targetKind, teacherRegistration, crn, content } = z
        .object({
          targetKind: z.enum(TARGET_KIND),
          teacherRegistration: z.string().length(9).nullable(),
          crn: z.number().nullable(),
          content: z.string(),
        })
        .parse(req.body);

      // TODO: add validation for content to be between 0 - 10 when answer is numeric

      if (
        targetKind === "TEACHER_REGISTRATION" &&
        teacherRegistration === null
      ) {
        throw new Error(
          "Teacher registration cannot be null when targetKind is TEACHER_REGISTRATION"
        );
      }

      if (targetKind === "CRN" && crn === null) {
        throw new Error("CRN cannot be null when targetKind is CRN");
      }

      await pool.query(
        `INSERT INTO TmpAnswer VALUES (NULL, ?, ?, ?, ?, ?, ?)`,
        [
          studentRegistration,
          surveyQuestionId,
          targetKind,
          teacherRegistration,
          crn,
          content,
        ]
      );

      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

export default answersRouter;
