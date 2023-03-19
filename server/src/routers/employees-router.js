import express from "express";
import { pool } from "../db/connection.js";

const employeesRouter = express.Router();

employeesRouter.get("/employees", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    res.status(400).send("Missing required query parameter");
    return;
  }

  try {
    const [employees, _] = await pool.query(
      "SELECT Employee.id, fullname FROM Employee JOIN User ON Employee.id = User.id WHERE fullName LIKE ?",
      [q + "%"]
    );

    res.send(employees);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

employeesRouter.get("/employees/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).send("Missing required path parameter");
    return;
  }

  try {
    const [employees, _] = await pool.query(
      "SELECT Employee.id, registration, fullName, GlobalKind.kind FROM Employee JOIN GlobalKind ON Employee.globalKindId = GlobalKind.id JOIN User ON Employee.id = User.id WHERE Employee.id = ?",
      [id]
    );

    if (employees.length < 1) {
      res.status(404).send("Employee not found");
      return;
    }

    const employee = employees[0];

    res.send(employee);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default employeesRouter;
