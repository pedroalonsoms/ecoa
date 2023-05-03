import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const finishRouter = express.Router();
finishRouter.post("/finish/student/:studentRegistration", async (req, res) => {
  try {
    const { studentRegistration } = z
      .object({ studentRegistration: z.string().length(9) })
      .parse(req.params);

    const [activeSurvey] = await pool.query(
      "SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate"
    );

    if (activeSurvey.length === 0) {
      throw new Error("There is no active survey");
    }

    // TODO: this endpoint should only be reachable when progress is complete
    // and user has not already answered the survey (videogame client-side validation)

    const [studentFinishedSurveys] = await pool.query(
      "SELECT * FROM StudentFinishedSurvey WHERE studentRegistration = ? AND surveyId = ?",
      [studentRegistration, activeSurvey[0].id]
    );

    if (studentFinishedSurveys.length > 0) {
      throw new Error("User already answered the survey");
    }

    await pool.query("INSERT INTO StudentFinishedSurvey VALUES (?, ?)", [
      studentRegistration,
      activeSurvey[0].id,
    ]);

    await pool.query("CALL transferTmpAnswersByStudentRegistration(?)", [
      studentRegistration,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default finishRouter;
