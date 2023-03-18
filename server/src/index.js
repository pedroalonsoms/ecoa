const PORT = process.env.PORT || 8080;

import express from "express";
import studentsRouter from "./routers/students-router.js";
import loginRouter from "./routers/login-router.js";

const app = express();
app.use(express.json());
app.use("/", express.static("../web/dist"));
app.use("/api", loginRouter);
app.use("/api", studentsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
