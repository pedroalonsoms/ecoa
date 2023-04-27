import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { TARGET_KIND } from "../utils/constants.js";

const answersRouter = express.Router();

answersRouter.get(
  "/answers/:studentRegistration/questions/:questionId",
  async (req, res) => {
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
        throw new Error("The requested question has not been answered.");
      }

      return res.status(200).send(rows);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

answersRouter.post(
  "/answers/:studentRegistration/questions/:questionId",
  async (req, res) => {
    try {
      const { studentRegistration, questionId } = z
        .object({
          studentRegistration: z.string().length(9),
          questionId: z.string().transform((s) => parseInt(s)),
        })
        .parse(req.params);

      const { targetKind, teacherRegistration, crn, content } = z
        .object({
          targetKind: z.enum(TARGET_KIND),
          teacherRegistration: z.string().nullable(),
          crn: z.number().nullable(),
          content: z.string(),
        })
        .parse(req.body);

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
        `INSERT INTO TmpAnswer (studentRegistration, surveyQuestionId, targetKind, teacherRegistration, crn, content) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          studentRegistration,
          questionId,
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
