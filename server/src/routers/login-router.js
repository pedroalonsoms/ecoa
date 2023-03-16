import express from "express";
import db from "../db/db.js";

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
  const { email, password } = req.body;
  const [rows, _] = db.query(
    "SELECT kind FROM Employee JOIN User ON Employee.id = User.id WHERE User.email = ? AND password = ?",
    [email, password]
  );
  res.send(rows);
});

export default loginRouter;
