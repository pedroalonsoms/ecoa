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
          teacherRegistration: z
            .string()
            .transform((s) => (s === "-1" ? null : s)),
          crn: z.number().transform((n) => (n === -1 ? null : n)),
          content: z.string().transform((s) => (s === "-1" ? null : s)),
        })
        .parse(req.body);

      const [[question]] = await pool.query(
        `SELECT answerKind FROM Question WHERE id = ?`,
        [surveyQuestionId]
      );

      if (!question) {
        throw new Error("Question not found");
      }

      if (question.answerKind === "NUMERIC") {
        const numericContent = parseInt(content);

        if (content !== null && (numericContent < 0 || numericContent > 10)) {
          throw new Error(
            "Content must be a number between 0 and 10 or null when answer is numeric"
          );
        }
      }

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

      const [existingRecord] = await pool.query(
        `SELECT * FROM TmpAnswer WHERE studentRegistration = ? AND surveyQuestionId = ?`,
        [studentRegistration, surveyQuestionId]
      );

      if (existingRecord.length > 0) {
        // Update the existing record
        await pool.query(
          `UPDATE TmpAnswer SET targetKind = ?, teacherRegistration = ?, crn = ?, content = ? WHERE studentRegistration = ? AND surveyQuestionId = ?`,
          [
            targetKind,
            teacherRegistration,
            crn,
            content,
            studentRegistration,
            surveyQuestionId,
          ]
        );
      } else {
        // Insert a new record
        await pool.query(
          `INSERT INTO TmpAnswer (studentRegistration, surveyQuestionId, targetKind, teacherRegistration, crn, content) VALUES (?, ?, ?, ?, ?, ?)`,
          [
            studentRegistration,
            surveyQuestionId,
            targetKind,
            teacherRegistration,
            crn,
            content,
          ]
        );
      }

      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

export default answersRouter;
