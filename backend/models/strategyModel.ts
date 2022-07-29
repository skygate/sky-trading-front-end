import mongoose from "mongoose";

const strategySchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
});

const strategy = mongoose.model("Strategy", strategySchema);

export default strategy;
