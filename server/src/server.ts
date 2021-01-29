import express from "express";
import cors from "cors";

import { authenticateDatabase } from "./models/index";
import routes from "./api/routes";
import errorHandler from "./api/middleware";
import Exception from "./error";

export const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: [
    "http://localhost:9000",
    "http://localhost:3000",
    "https://react-express-typescript-example.vercel.app",
    "https://react-express-typescript-example-prod.vercel.app",
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

const corsMiddleware = cors(corsOptions);

app.use(corsMiddleware);

app.use("/", routes);

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.get("*", function (req, res, next) {
  const error = new Exception(301);
  next(error);
});

app.use(errorHandler);

app.listen(PORT, () => {
  authenticateDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
