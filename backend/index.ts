import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { STRATEGIES } from "./src/data/strategies";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.post("/strategy", (req: Request, res: Response) => {
  const { name, date } = req.body;
  if (name && date) {
    STRATEGIES.push({
      id: STRATEGIES.length,
      name,
      date,
    });
    res.status(201).send("Success");
  }
  res.status(400).send("Failure");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
