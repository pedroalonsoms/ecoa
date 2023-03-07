const PORT = 8080;

import express from "express";
import studentRouter from "./routers/student-router.js";
const app = express();

app.use(express.json());
app.use("/", express.static("../web/dist"));
app.use("/api", studentRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
