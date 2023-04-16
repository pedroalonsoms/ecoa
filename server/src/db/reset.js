import { pool } from "./connection.js";
import fs from "fs/promises";

const SQL_FILES_PATH = "./src/db/sql-files";

const main = async () => {
  const files = await fs.readdir(SQL_FILES_PATH);
  const sortedFiles = files.sort();

  for (const file of sortedFiles) {
    const contents = await fs.readFile(`${SQL_FILES_PATH}/${file}`, {
      encoding: "utf-8",
    });
    await pool.query(contents);
  }

  await pool.end();
};

main();
