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

    /*     await pool.query("CALL transferTmpAnswersByStudentRegistration(?)", [
      studentRegistration,
    ]); */

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default finishRouter;
