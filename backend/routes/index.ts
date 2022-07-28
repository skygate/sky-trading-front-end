import express from "express";
import {
  createStrategy,
  getStrategy,
} from "../controllers/strategyControllers";

const router = express.Router();

router.post("/strategy", createStrategy).get("/strategy", getStrategy);

export default router;
