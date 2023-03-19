const PORT = process.env.PORT || 8080;

import express from "express";
import loginRouter from "./routers/login-router.js";
import studentsRouter from "./routers/students-router.js";
import employeesRouter from "./routers/employees-router.js";

const app = express();
app.use(express.json());
app.use("/", express.static("../web/dist"));
app.use(
  "/game",

  /* 
    This is a hack to silence Unity warnings due to issues with gzip files and
    the way express handles compression  
  */

  express.static("../game/dist", {
    setHeaders: (res, path, _) => {
      if (path.includes(".gz")) {
        res.setHeader("Content-Encoding", "gzip");
      }

      if (path.includes(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
    },
  })
);
app.use("/api", loginRouter);
app.use("/api", studentsRouter);
app.use("/api", employeesRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
