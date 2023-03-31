// crud para el front

// pedro

// TODO: add question order (ASC-only)
// TODO: add question on-delete cascade option
// TODO: add filtering on `/questions` endpoint, simplify into a single re-usable function

import express from "express";
import { pool } from "../db/connection.js";

const QUESTION_SECTION = ["TEACHER", "COURSE"];
const ANSWER_KIND = ["NUMERIC", "TEXT"];

const questionsRouter = express.Router();

questionsRouter.get("/questions", async (req, res) => {
  try {
    const [questions] = await pool.query("SELECT * from Question");

    res.status(200).send(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

questionsRouter.post("/questions", async (req, res) => {
  const { title, section, answerKind } = req.body;

  if (!title || !section || !answerKind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (!QUESTION_SECTION.includes(section)) {
    res.status(400).send("Invalid section");
    return;
  }

  if (!ANSWER_KIND.includes(answerKind)) {
    res.status(400).send("Invalid answer kind");
    return;
  }

  try {
    await pool.query("INSERT INTO Question VALUES (NULL, ?, ?, ?)", [
      title,
      section,
      answerKind,
    ]);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

questionsRouter.put("/questions/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Missing required path field");
    return;
  }

  const { title, section, answerKind } = req.body;

  if (!title || !section || !answerKind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (!QUESTION_SECTION.includes(section)) {
    res.status(400).send("Invalid section");
    return;
  }

  if (!ANSWER_KIND.includes(answerKind)) {
    res.status(400).send("Invalid answer kind");
    return;
  }

  try {
    await pool.query(
      "UPDATE Question SET title = ?, section = ?, answerKind = ? WHERE id = ?",
      [title, section, answerKind, parseInt(id)]
    );

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

questionsRouter.delete("/questions/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Missing required path field");
    return;
  }

  try {
    await pool.query("DELETE FROM Question WHERE id = ?", [parseInt(id)]);

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default questionsRouter;
