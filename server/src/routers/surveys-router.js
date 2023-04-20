// crud para el front

// pedro

// TODO: add constraint where only one survey can be active at a given time
// TODO: consistent id naming

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";
import { ANSWER_KIND, SECTION_KIND } from "../utils/constants.js";

const stringToDateWithZeroTime = (s) => {
  const date = new Date(s);
  if (isNaN(date)) {
    throw new Error("Could not parse Date string");
  }
  /* 
    This is a hack to throw away the seconds.
    Using `setHours` method causes date to shift in some cases
    (maybe because of timezone calculations)
  */
  date.setUTCHours(0, 0, 0, 0);
  return date.toISOString().split("T")[0];
};

const validateSurvey = async (requestBody) => {
  const parsedRequestBody = z
    .object({
      title: z.string(),
      questionIds: z.number().array().nonempty(),
      startDate: z.string().transform(stringToDateWithZeroTime),
      endDate: z.string().transform(stringToDateWithZeroTime),
    })
    .parse(requestBody);

  const { startDate, endDate } = parsedRequestBody;

  if (new Date(startDate) > new Date(endDate)) {
    throw new Error("startDate cannot be greater than endDate");
  }

  const [surveysThatOverlap] = await pool.query(
    "SELECT id FROM Survey WHERE CAST(? AS DATE) BETWEEN startDate AND endDate OR CAST(? AS DATE) BETWEEN startDate AND endDate",
    [startDate, endDate]
  );

  if (surveysThatOverlap.length > 0) {
    throw new Error("Cannot create survey that overlaps");
  }

  return parsedRequestBody;
};

const surveysRouter = express.Router();

surveysRouter.get("/surveys/active", async (req, res) => {
  try {
    const [surveys] = await pool.query(
      "SELECT id FROM Survey WHERE CURDATE() BETWEEN startDate AND endDate"
    );

    if (surveys.length < 1) {
      throw new Error("There are no active surveys");
    }

    const [survey] = surveys;

    res.status(200).send({ id: survey.id });
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

surveysRouter.get("/surveys", async (req, res) => {
  try {
    const [rawSurveys] = await pool.query(
      "SELECT id, title, startDate, endDate, IF(CURDATE() BETWEEN startDate AND endDate, TRUE, FALSE) AS isActive FROM Survey ORDER BY startDate ASC"
    );

    const surveys = z
      .object({
        id: z.number(),
        title: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        isActive: z.number().transform((n) => Boolean(n)),
      })
      .array()
      .parse(rawSurveys);

    res.status(200).send(surveys);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

surveysRouter.post("/surveys", async (req, res) => {
  try {
    const { title, questionIds, startDate, endDate } = await validateSurvey(
      req.body
    );

    const [surveysWithSameName] = await pool.query(
      "SELECT id FROM Survey WHERE title = ?",
      [title]
    );

    if (surveysWithSameName.length > 0) {
      throw new Error("Cannot create survey with duplicate title");
    }

    await pool.query(
      "INSERT INTO Survey VALUES (NULL, ?, CAST(? AS DATE), CAST(? AS DATE))",
      [title, startDate, endDate]
    );

    const [surveys] = await pool.query(
      "SELECT id FROM Survey WHERE title = ?",
      [title]
    );

    const [survey] = z
      .object({ id: z.number() })
      .array()
      .length(1)
      .parse(surveys);

    for (const questionId of questionIds) {
      await pool.query("INSERT INTO SurveyQuestion VALUES (NULL, ?, ?)", [
        survey.id,
        questionId,
      ]);
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

surveysRouter.put("/surveys/:surveyId", async (req, res) => {
  try {
    const { surveyId } = z
      .object({ surveyId: z.string().transform((s) => parseInt(s)) })
      .parse(req.params);

    const [existingSurveys] = await pool.query(
      "SELECT id FROM Survey WHERE id = ?",
      [surveyId]
    );

    if (existingSurveys.length < 1) {
      throw new Error("Could not found survey with given id");
    }

    const { title, questionIds, startDate, endDate } = await validateSurvey(
      req.body
    );

    await pool.query(
      "UPDATE Survey SET title = ?, startDate = CAST(? AS DATE), endDate = CAST(? AS DATE) WHERE id = ?",
      [title, startDate, endDate, surveyId]
    );

    await pool.query("DELETE FROM SurveyQuestion WHERE surveyId = ?", [
      surveyId,
    ]);

    for (const questionId of questionIds) {
      await pool.query("INSERT INTO SurveyQuestion VALUES (NULL, ?, ?)", [
        surveyId,
        questionId,
      ]);
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

// TODO: add `published` instead of `:surveyId` dynamic-url path to generalize for the current survey

surveysRouter.get("/surveys/:surveyId", async (req, res) => {
  try {
    const { surveyId } = z
      .object({ surveyId: z.string().transform((s) => parseInt(s)) })
      .parse(req.params);

    const [surveys] = await pool.query(
      "SELECT id, title, startDate, endDate FROM Survey WHERE id = ?",
      [surveyId]
    );

    const [survey] = z
      .object({
        id: z.number(),
        title: z.string(),
        startDate: z.string(),
        endDate: z.string(),
      })
      .array()
      .length(1)
      .parse(surveys);

    let [rawQuestions] = await pool.query(
      "SELECT Question.*, IF(surveyId IS NULL, FALSE, TRUE) AS isActive FROM Question LEFT JOIN SurveyQuestion ON Question.id = SurveyQuestion.questionId AND surveyId = ? ORDER BY Question.id ASC",
      [surveyId]
    );

    let questions = z
      .object({
        id: z.number(),
        title: z.string(),
        section: z.enum(SECTION_KIND),
        answerKind: z.enum(ANSWER_KIND),
        isActive: z.number().transform((n) => Boolean(n)),
      })
      .array()
      .parse(rawQuestions);

    const { section, isActive } = z
      .object({
        section: z.enum(SECTION_KIND).optional(),
        isActive: z
          .string()
          .transform((s) => {
            if (s.toLowerCase() === "true") {
              return true;
            }

            if (s.toLowerCase() === "false") {
              return false;
            }

            throw new Error(`invalid string: ${s} on isActive`);
          })
          .optional(),
      })
      .parse(req.query);

    if (section !== undefined) {
      questions = questions.filter((question) => question.section === section);
    }

    if (isActive !== undefined) {
      questions = questions.filter(
        (question) => question.isActive === isActive
      );
    }

    res.status(200).send({ ...survey, questions });
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

surveysRouter.delete("/surveys/:surveyId", async (req, res) => {
  try {
    const { surveyId } = z
      .object({ surveyId: z.string().transform((s) => parseInt(s)) })
      .parse(req.params);

    const [existingSurveys] = await pool.query(
      "SELECT id FROM Survey WHERE id = ?",
      [surveyId]
    );

    if (existingSurveys.length < 1) {
      throw new Error("Cannot delete survey with given id, it does not exist");
    }

    await pool.query("DELETE FROM Survey WHERE id = ?", [surveyId]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default surveysRouter;
