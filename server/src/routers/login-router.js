// return name
// improve API login seciurity by not using ?id="A01741437"
// not use brotli for game compression, use gz instead

// Pedro

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const loginRouter = express.Router();

loginRouter.get("/login", async (req, res) => {
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

    const [colaborators] = await pool.query(
      "SELECT id, fullName FROM Colaborator WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (colaborators.length > 0) {
      const user = colaborators[0];
      res.status(200).send({ role: "COLABORATOR", ...user });
      return;
    }

    res.status(404).send("User not found. Email or password are incorrect.");
  } catch (error) {
    res.status(400).send(error);
  }
});

export default loginRouter;
