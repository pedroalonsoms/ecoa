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
    const [users, _] = await pool.query(
      "SELECT * from User WHERE email = ? AND password = ?",
      [email, password]
    );

    if (users.length < 1) {
      res.status(404).send("User not found. Email or password are incorrect.");
      return;
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default loginRouter;
