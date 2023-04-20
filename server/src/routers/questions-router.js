// crud para el front

// pedro

// TODO: add question order (ASC-only)

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { ANSWER_KIND, SECTION_KIND } from "../utils/constants.js";

const questionsRouter = express.Router();

questionsRouter.get("/questions", async (req, res) => {
  try {
    const [questions] = await pool.query(
      "SELECT id, title, section, answerKind FROM Question ORDER BY id ASC"
    );

    res.status(200).send(questions);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

questionsRouter.post("/questions", async (req, res) => {
  try {
    const { acronym, keyAcronym, title, section, answerKind } = z
      .object({
        acronym: z.string(),
        keyAcronym: z.string(),
        title: z.string(),
        section: z.enum(SECTION_KIND),
        answerKind: z.enum(ANSWER_KIND),
      })
      .parse(req.body);

    await pool.query("INSERT INTO Question VALUES (NULL, ?, ?, ?, ?, ?)", [
      acronym,
      keyAcronym,
      title,
      section,
      answerKind,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

questionsRouter.put("/questions/:id", async (req, res) => {
  try {
    const { id } = z
      .object({ id: z.string().transform((id) => parseInt(id)) })
      .parse(req.params);

    const { acronym, keyAcronym, title, section, answerKind } = z
      .object({
        acronym: z.string(),
        keyAcronym: z.string(),
        title: z.string(),
        section: z.enum(SECTION_KIND),
        answerKind: z.enum(ANSWER_KIND),
      })
      .parse(req.body);

    await pool.query(
      "UPDATE Question SET acronym = ?, keyAcronym = ?, title = ?, section = ?, answerKind = ? WHERE id = ?",
      [acronym, keyAcronym, title, section, answerKind, id]
    );

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

questionsRouter.delete("/questions/:id", async (req, res) => {
  try {
    const { id } = z
      .object({ id: z.string().transform((id) => parseInt(id)) })
      .parse(req.params);

    const [questions] = await pool.query(
      "SELECT id FROM Question WHERE id = ?",
      [id]
    );

    if (questions.length < 1) {
      throw new Error("Question does not exist");
    }

    await pool.query("DELETE FROM Question WHERE id = ?", [id]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default questionsRouter;
