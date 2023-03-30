const PORT = process.env.PORT || 8080;

import express from "express";
import loginRouter from "./routers/login-router.js";

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
