import express from "express";
const studentRouter = express.Router();

studentRouter.get("/students", (req, res) => {
  res.send("here are all of the students");
});

export default studentRouter;
