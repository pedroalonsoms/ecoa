// crud para el front

// pedro

// TODO: add question order (ASC-only)
// TODO: add filtering on `/questions` endpoint, simplify into a single re-usable function

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const SECTION_KIND = ["TEACHER", "COURSE"];
const ANSWER_KIND = ["NUMERIC", "TEXT"];

const questionsRouter = express.Router();

questionsRouter.get("/questions", async (req, res) => {
  try {
    const [questions] = await pool.query(
      "SELECT * FROM Question ORDER BY title ASC"
    );

    res.status(200).send(questions);
  } catch (error) {
    res.status(400).send(error);
  }
});

questionsRouter.post("/questions", async (req, res) => {
  try {
    const { title, section, answerKind } = z
      .object({
        title: z.string(),
        section: z.enum(SECTION_KIND),
        answerKind: z.enum(ANSWER_KIND),
      })
      .parse(req.body);

    await pool.query("INSERT INTO Question VALUES (NULL, ?, ?, ?)", [
      title,
      section,
      answerKind,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

questionsRouter.put("/questions/:id", async (req, res) => {
  try {
    const { id } = z
      .object({ id: z.string().transform((id) => parseInt(id)) })
      .parse(req.params);

    const { title, section, answerKind } = z
      .object({
        title: z.string(),
        section: z.enum(SECTION_KIND),
        answerKind: z.enum(ANSWER_KIND),
      })
      .parse(req.body);

    await pool.query(
      "UPDATE Question SET title = ?, section = ?, answerKind = ? WHERE id = ?",
      [title, section, answerKind, id]
    );

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

questionsRouter.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = z
      .object({ id: z.string().transform((id) => parseInt(id)) })
      .parse(req.params);

    await pool.query("DELETE FROM Question WHERE id = ?", [id]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default questionsRouter;
