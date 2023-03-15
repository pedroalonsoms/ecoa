import express from "express";
const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
  const { email, password } = req.body;
  res.send("here are all of the students");
});

export default loginRouter;
