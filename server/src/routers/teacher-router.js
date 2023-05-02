import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { TARGET_KIND } from "../utils/constants.js";

const teacherRouter = express.Router();

teacherRouter.get("/teachers/:teacherRegistration/info", async (req, res) => {
  try {
    const { teacherRegistration } = req.params;

    const [teacherInfo] = await pool.query(
      "SELECT * FROM TeacherInfo WHERE registration = ?",
      [teacherRegistration]
    );

    res.status(200).send(teacherInfo);
  } catch (error) {
    res.status(500).send({ error: error.message || "Unknown error" });
  }
});

export default teacherRouter;
