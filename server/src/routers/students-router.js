import express from "express";
import { pool } from "../db/connection.js";

const studentsRouter = express.Router();

studentsRouter.get("/students", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.status(400).send("Missing required query parameter");
    return;
  }

  try {
    const [students, _] = await pool.query(
      "SELECT Student.id, fullname FROM Student JOIN User ON Student.id = User.id WHERE fullName LIKE ?",
      [q + "%"]
    );

    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

studentsRouter.get("/students/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Missing required path parameter");
    return;
  }

  try {
    const [students, _] = await pool.query(
      "SELECT Student.id, registration, fullName, completedAt FROM Student JOIN User ON Student.id = User.id WHERE Student.id = ?",
      [id]
    );

    if (students.length < 1) {
      res.status(404).send("Student not found");
      return;
    }

    const student = students[0];

    res.send(student);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default studentsRouter;
