import express from "express";
const studentsRouter = express.Router();

studentsRouter.get("/students", (req, res) => {
  res.send("here are all of the students");
});

export default studentsRouter;
