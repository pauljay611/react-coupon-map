import express from "express";
import { authenticateDatabase } from "./models/index";

const app = express();
const PORT = 8000;
app.get("/", (req, res) => res.send("Express + TypeScript Server"));
app.listen(PORT, () => {
  authenticateDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
