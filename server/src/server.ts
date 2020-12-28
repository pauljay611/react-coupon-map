import express from "express";
import cors from "cors";

import { authenticateDatabase } from "./models/index";
import routes from "./api/routes";

const app = express();
const PORT = 8000;

const corsOptions = {
  origin: ["http://localhost:9000"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

const corsMiddleware = cors(corsOptions);

app.use(corsMiddleware);

app.use("/", routes);

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.listen(PORT, () => {
  authenticateDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
