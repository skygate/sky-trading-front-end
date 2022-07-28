import { Request, Response } from "express";

export const createStrategy = async (req: Request, res: Response) => {
  if (req.body && req.body.name && req.body.date) {
    const { date, name } = req.body;
    res.status(201).send("Success");
  } else {
    res.status(400).send("Failure");
  }
};

export const getStrategy = async (req: Request, res: Response) => {
  res.status(200).send("Success");
};
