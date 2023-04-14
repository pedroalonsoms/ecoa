// Pedro

import express from "express";
import { pool } from "../db/connection.js";
import { z } from "zod";

const prizesRouter = express.Router();

/* 
    Randomize array in-place using Durstenfeld shuffle algorithm
    See: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

prizesRouter.get("/prizes", async (req, res) => {
  try {
    const { random, limit } = z
      .object({
        random: z
          .string()
          .transform((s) => Boolean(s))
          .optional(),
        limit: z.string().transform((s) => parseInt(s)),
      })
      .parse(req.query);

    const [rawPrizes] = await pool.query(
      "SELECT id, kind, explanation FROM Prizes"
    );

    let prizes = z
      .object({ id: z.number(), kind: z.string(), explanation: z.string() })
      .array()
      .parse(rawPrizes);

    if (random !== undefined && random === true) {
      shuffleArray(prizes);
    }

    if (limit !== undefined) {
      prizes = prizes.slice(0, limit);
    }

    res.status(200).send({ prizes });
  } catch (error) {
    res.status(400).send({ error: error.message || "Unknown error" });
  }
});

export default prizesRouter;
