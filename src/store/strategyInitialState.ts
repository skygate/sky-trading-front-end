import { StrategyState } from "./strategyCreationSlice";

export const strategyInitialState: StrategyState = {
  name: "",
  description: "",
  isExpanded: false,
  open: {
    isExpanded: false,
    chartType: null,
    timeFrame: null,
    conditions: null,
    risk: null,
  },
  close: {
    isExpanded: false,
    chartType: null,
    timeFrame: null,
    conditions: null,
    risk: null,
  },
  asset: {
    isExpanded: false,
    market: null,
    symbol: null,
    description: null,
  },
  interval: null,
  allocation: null,
};
