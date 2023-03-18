import express from "express";
import { pool } from "../db/connection.js";

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
  const { email, password } = req.body;
  const [rows, _] = pool.query(
    "SELECT kind FROM Employee JOIN User ON Employee.id = User.id WHERE User.email = ? AND password = ?",
    [email, password]
  );
  res.send(rows);
});

export default loginRouter;
