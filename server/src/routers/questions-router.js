// crud para el front

// pedro

// TODO: add question order

import express from "express";
import { pool } from "../db/connection.js";

const QUESTION_KIND = ["TEACHER", "COURSE"];
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
  const { title, kind, answerKind } = req.body;

  if (!title || !kind || !answerKind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (!QUESTION_KIND.includes(kind)) {
    res.status(400).send("Invalid question kind");
    return;
  }

  if (!ANSWER_KIND.includes(answerKind)) {
    res.status(400).send("Invalid answer kind");
    return;
  }

  try {
    await pool.query("INSERT INTO Question VALUES (NULL, ?, ?, ?)", [
      title,
      kind,
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

  const { title, kind, answerKind } = req.body;

  if (!title || !kind || !answerKind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (!QUESTION_KIND.includes(kind)) {
    res.status(400).send("Invalid question kind");
    return;
  }

  if (!ANSWER_KIND.includes(answerKind)) {
    res.status(400).send("Invalid answer kind");
    return;
  }

  try {
    await pool.query(
      "UPDATE Question SET title = ?, kind = ?, answerKind = ? WHERE id = ?",
      [title, kind, answerKind, parseInt(id)]
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
