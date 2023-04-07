const PORT = process.env.PORT || 8080;

import express from "express";
import cors from "cors";

import loginRouter from "./routers/login-router.js";
import questionsRouter from "./routers/questions-router.js";
import surveysRouter from "./routers/surveys-router.js";

// TODO: future cors implementation when needing cross-domain request
const app = express();
app.use(cors());
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

      if (path.includes(".br")) {
        res.setHeader("Content-Encoding", "br");
      }
    },
  })
);
app.use("/api", loginRouter);
app.use("/api", questionsRouter);
app.use("/api", surveysRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
