// Kerim

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const progressesRouter = express.Router();

progressesRouter.post("/progress/student/:studentId", async (req, res) => {
  try {
    const { studentId } = z
      .object({ studentId: z.string().transform((s) => parseInt(s)) })
      .parse(req.params);

    const [courses] = await pool.query(
      "SELECT DISTINCT * FROM Course JOIN Clasroom ON Course.id = Classroom.courseId JOIN Enrolled ON Enrolled.classroomId = Classroom.id WHERE Enrolled.studentId= ?",
      [studentId]
    );

    res.status(200).send(courses);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default progressesRouter;
