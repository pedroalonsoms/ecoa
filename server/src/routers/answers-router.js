// Answers router
// Answers router
import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { SECTION_KIND } from "../utils/constants.js";

const answersRouter = express.Router();

answersRouter.post(
  "/answers/:studentId/questions/:questionId",
  async (req, res) => {
    try {
      const { studentId, questionId } = z
        .object({
          studentId: z.string().transform((s) => parseInt(s)),
          questionId: z.string().transform((s) => parseInt(s)),
        })
        .parse(req.params);

      const { score, toId, section } = z
        .object({
          score: z.number().min(0).max(10).nullable(),
          toId: z.number(),
          section: z.enum(SECTION_KIND),
        })
        .parse(req.body);

      await pool.query(
        "INSERT INTO TmpAnswer (studentRegistration, surveyQuestionId, targetKind, teacherRegistration, crn, content) VALUES (?, ?, ?, ?, ?, ?)",
        [
          studentId,
          questionId,
          section,
          section === "TEACHER" ? toId : null,
          section === "MATERIA" ? toId : null,
          score,
        ]
      );

      console.log({ studentId, questionId, score, section, toId });
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

answersRouter.get("/answers/questions/:questionId", async (req, res) => {
  try {
    const { questionId } = z
      .object({
        questionId: z.string().transform((s) => parseInt(s)),
      })
      .parse(req.params);

    const [results] = await pool.query(
      "SELECT studentRegistration AS studentId, targetKind AS section, teacherRegistration AS teacherId, crn AS courseId, content AS score FROM TmpAnswer WHERE surveyQuestionId = ?",
      [questionId]
    );

    const response = results.map((row) => ({
      studentId: row.studentId,
      toId: row.section === "TEACHER" ? row.teacherId : row.courseId,
      section: row.section,
    }));

    res.json(response);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default answersRouter;
