// crud para el front

// pedro

// TODO: catch duplicate title names error
// TODO: edit survey and delete survey
// TODO: filter questions by kind

import express from "express";
import { pool } from "../db/connection.js";

const surveysRouter = express.Router();

surveysRouter.get("/surveys", async (req, res) => {
  try {
    const [surveys] = await pool.query("SELECT * from Survey");

    res.status(200).send(surveys);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

surveysRouter.post("/surveys", async (req, res) => {
  const { title, questionIds } = req.body;

  if (!title || !questionIds) {
    res.status(400).send("Missing required body field");
    return;
  }

  if (!Array.isArray(questionIds)) {
    res.status(400).send("questionIds must be of type array");
    return;
  }

  if (questionIds.length < 1) {
    res.status(400).send("questionIds array cannot be empty");
    return;
  }

  try {
    await pool.query("INSERT INTO Survey VALUES (NULL, ?, FALSE)", [title]);

    const [surveys] = await pool.query(
      "SELECT id FROM Survey WHERE title = ?",
      [title]
    );

    if (surveys.length < 1) {
      res.status(400).send("Could not find inserted survey");
      return;
    }

    const survey = surveys[0];

    if (!survey.id) {
      res.status(400).send("Could not retrieve survey id from inserted survey");
      return;
    }

    for (const questionId of questionIds) {
      await pool.query("INSERT INTO SurveyQuestion VALUES (?, ?)", [
        parseInt(survey.id),
        parseInt(questionId),
      ]);
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

//"questions/surveys/:surveyId?section='TEACHER'&isActive=true"
surveysRouter.get("/surveys/:surveyId", async (req, res) => {
  const { surveyId } = req.params;

  if (!surveyId) {
    res.status(400).send("Missing required path field");
    return;
  }

  try {
    const [surveys] = await pool.query("SELECT * FROM Survey WHERE id = ?", [
      parseInt(surveyId),
    ]);

    if (surveys.length < 1) {
      res.status(400).send("Could not find survey with provided id");
      return;
    }

    const survey = surveys[0];

    const [questions] = await pool.query(
      "SELECT Question.*, IF(surveyId IS NULL, FALSE, TRUE) AS isActive FROM Question LEFT JOIN SurveyQuestion ON Question.id = SurveyQuestion.questionId AND surveyId = ?",
      [parseInt(surveyId)]
    );

    res.status(200).send({ ...survey, questions });
  } catch (error) {
    console.error(error);
    res.status(500).send("Unknown error");
  }
});

export default surveysRouter;
