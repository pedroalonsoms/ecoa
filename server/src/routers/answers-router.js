// kerim
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

      const { score, courseId } = z
        .object({
          score: z.number().min(0).max(10).nullable(),
          courseId: z.number(),
        })
        .parse(req.body);

      const [sections] = await pool.query(
        "SELECT section FROM Question WHERE id = ?",
        [questionId]
      );

      const rawSection = sections[0].section;

      const section = z.enum(SECTION_KIND).parse(rawSection);

      if (section === "COURSE") {
        await pool.query("SELECT id FROM ");
        await pool.query(
          "INSERT score INTO TmpCourseNumericAnswer VALUES (?, ) WHERE ",
          [studentId, courseId]
        );
      } else if (section === "TEACHER") {
        await pool.query(
          "INSERT score INTO TmpTeacherNumericAnswer VALUES (?)",
          [score]
        );
      }

      console.log({ studentId, questionId, score, section });
      res.sendStatus(200);
    } catch (error) {
      res.status(400).send({ error: error.message || "Unknown error" });
    }
  }
);

export default answersRouter;
