import express from "express";
import {
  createStrategy,
  deleteStrategy,
  getStrategy,
} from "../controllers/strategyControllers";

const router = express.Router();

router.route("/strategy").post(createStrategy).get(getStrategy);
router.route("/strategy/:id").delete(deleteStrategy);

export default router;
