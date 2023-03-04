import express from "express";
const PORT = 8080;

const app = express();
app.use(express.json());

app.get("hello", () => {
  return "world";
});

app.listen(PORT, () => {
  console.log(`Listening on port ${8080}`);
});
