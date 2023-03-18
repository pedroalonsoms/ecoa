import express from "express";
import { pool } from "../db/connection.js";

const employeesRouter = express.Router();

employeesRouter.get("/employees", (req, res) => {
  const { q } = req.params;
  const [rows, _] = pool.query(
    "SELECT * FROM Employee JOIN User WHERE User.fullName LIKE ?",
    [q]
  );
  res.send(rows);
});

employeesRouter.get("/employees/:registration", (req, res) => {
  const { registration } = req.query;
  const [rows, _] = pool.query(
    "SELECT * FROM Employee JOIN User WHERE User.registration = ?",
    [registration]
  );

  if (rows.length < 1) {
    res.send(404);
    return;
  }

  const user = rows[0];

  // TODO: add authentification for API ?
  const [rows2, _2] = pool.query(
    "SELECT AVG(score) FROM Answer WHERE toId = ? AND score IS NOT NULL",
    [user.id]
  );

  res.send({ score: rows2[0], user });
});

export default employeesRouter;
