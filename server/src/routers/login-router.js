// return name

// Pedro

import express from "express";
import { pool } from "../db/connection.js";

const loginRouter = express.Router();

loginRouter.get("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("Missing required body field");
    return;
  }

  try {
    const [students] = await pool.query(
      "SELECT id, fullName from Student WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (students.length > 0) {
      const user = students[0];
      res.status(200).send({ role: "STUDENT", ...user });
      return;
    }

    const [teachers] = await pool.query(
      "SELECT id, fullName from Teacher WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (teachers.length > 0) {
      const user = teachers[0];
      res.status(200).send({ role: "TEACHER", ...user });
      return;
    }

    const [colaborators] = await pool.query(
      "SELECT id, fullName from Colaborator WHERE email = ? AND pass = ?",
      [email, password]
    );

    if (colaborators.length > 0) {
      const user = colaborators[0];
      res.status(200).send({ role: "COLABORATOR", ...user });
      return;
    }

    res.status(404).send("User not found. Email or password are incorrect.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default loginRouter;
