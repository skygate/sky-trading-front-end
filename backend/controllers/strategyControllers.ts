import { Request, Response } from "express";
import StrategyModel from "../models/strategyModel";

export const createStrategy = async (req: Request, res: Response) => {
  if (req.body && req.body.name && req.body.description) {
    const { description, name } = req.body;
    const date = new Date();
    const strategy = await StrategyModel.create({
      name,
      description,
      date,
    });
    res.status(201).json(strategy);
  } else {
    res.status(400).json("Failure");
    throw new Error("Invalid request!");
  }
};

export const getStrategy = async (req: Request, res: Response) => {
  const strategies = await StrategyModel.find();
  res.status(200).json(strategies);
};

export const deleteStrategy = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) throw new Error("There is no id in request!");
    const deleted = await StrategyModel.deleteOne({ id: req.params.id });
    res.status(200).json(deleted);
  } catch (e) {
    console.log(e);
  }
};
