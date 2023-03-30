// crud para el front

// pedro

// TODO: add question type "Numeric" or "Comment"

import express from "express";
import { pool } from "../db/connection.js";

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
  const { title, kind } = req.body;

  if (!title || !kind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (kind !== "TEACHER" && kind !== "COURSE") {
    res.status(400).send("Invalid question kind");
    return;
  }

  try {
    await pool.query("INSERT INTO Question VALUES (NULL, ?, ?)", [title, kind]);

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

  const { title, kind } = req.body;

  if (!title || !kind) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (kind !== "TEACHER" && kind !== "COURSE") {
    res.status(400).send("Invalid question kind");
    return;
  }

  try {
    await pool.query("UPDATE Question SET title = ?, kind = ? WHERE id = ?", [
      title,
      kind,
      parseInt(id),
    ]);

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
