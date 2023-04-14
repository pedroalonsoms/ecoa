// return name
// improve API login seciurity by not using ?id="A01741437"
// not use brotli for game compression, use gz instead

// Pedro

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const loginRouter = express.Router();

loginRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = z
      .object({ email: z.string(), password: z.string() })
      .parse(req.body);

    const [students] = await pool.query(
      "SELECT id, fullName FROM Student WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (students.length > 0) {
      const user = students[0];
      res.status(200).send({ role: "STUDENT", ...user });
      return;
    }

    const [teachers] = await pool.query(
      "SELECT id, fullName FROM Teacher WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (teachers.length > 0) {
      const user = teachers[0];
      res.status(200).send({ role: "TEACHER", ...user });
      return;
    }

    const [administrators] = await pool.query(
      "SELECT id, fullName FROM Administrator WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (administrators.length > 0) {
      const user = administrators[0];
      res.status(200).send({ role: "ADMINISTRATOR", ...user });
      return;
    }

    res.status(404).send("User not found. Email or password are incorrect.");
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default loginRouter;
