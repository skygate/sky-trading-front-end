export interface ConditionsStrategyElement {}

export interface TimeFrameStrategyElement {
  unit: string;
  value: number;
}

export interface IntervalStrategyElement {
  unit: string;
  value: number;
}

export interface OpenCloseStartegyElement {
  isExpanded: boolean;
  chartType: null | string;
  timeFrame: null | TimeFrameStrategyElement;
  conditions: null | ConditionsStrategyElement;
  risk: null;
}

export interface AssetStrategyElement {
  isExpanded: boolean;
  symbol: null | string;
  description: null | string;
  market: null | string;
}

export interface StrategyState {
  [key: string]: any;
  name: string;
  description: string;
  isExpanded: boolean;
  open: OpenCloseStartegyElement;
  close: OpenCloseStartegyElement;
  asset: AssetStrategyElement;
  interval: null | IntervalStrategyElement;
}

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
};
