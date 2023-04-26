// kerim
import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const finishRouter = express.Router();
finishRouter.post("/finish/:studentRegistration", async (req, res) => {
  try {
    const { studentRegistration } = z
      .object({ studentRegistration: z.string().length(9) })
      .parse(req.params);

    // TODO: add validation where you can not `finish` if you didn't complete all of the active-survey questions 

    const [activeSurvey] = await pool.query(
      "SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate"
    );

    if (activeSurvey.length === 0) {
      throw new Error("No active survey found");
    }

    // counting number of questions in active survey
    const [questionCount] = await pool.query(
      "SELECT COUNT(*) as total FROM SurveyQuestion WHERE surveyId = ?",
      [activeSurvey[0].id]
    );

    // Counting the answered questions per student IN THE ACTIVE SURVEY
    const [answeredQuestions] = await pool.query(
      `SELECT COUNT(*) as total
       FROM TmpAnswer
       WHERE studentRegistration = ? AND surveyQuestionId IN (
         SELECT id
         FROM SurveyQuestion
         WHERE surveyId = ?
       )`,
      [studentRegistration, activeSurvey[0].id]
    );

    if (answeredQuestions[0].total !== questionCount[0].total) {
      throw new Error("All questions in active survey must be answered");
    }

    await pool.query("CALL transferTmpAnswersByStudentRegistration(?)", [
      studentRegistration,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default finishRouter;
