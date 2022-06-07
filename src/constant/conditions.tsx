import {
  AreaChartIcon,
  BarChartIcon,
  CandlestickChartIcon,
  HollowCandlestickChartIcon,
  LineChartIcon,
} from "assets/icons";

export interface ConditionInterface {
  type: ConditionTypes;
  id: string;
  name: string;
  icon: null | JSX.Element;
}

export enum ConditionTypes {
  INDICATORS = "indicators",
  CHART = "chart",
}

export type ConditionsType = { name: string; elements: ConditionInterface[] }[];

export const CONDITIONS: ConditionsType = [
  {
    name: "indicators",
    elements: [
      {
        type: ConditionTypes.INDICATORS,
        id: "indicators-ema",
        name: "EMA",
        icon: null,
      },
      {
        type: ConditionTypes.INDICATORS,
        id: "indicators-sma",
        name: "SMA",
        icon: null,
      },
      {
        type: ConditionTypes.INDICATORS,
        id: "indicators-stochastic",
        name: "Stochastic",
        icon: null,
      },
      {
        type: ConditionTypes.INDICATORS,
        id: "indicators-rsi",
        name: "RSI",
        icon: null,
      },
    ],
  },
  {
    name: "Chart patterns",
    elements: [
      {
        type: ConditionTypes.CHART,
        id: "char-patterns-bars",
        name: "bars",
        icon: <BarChartIcon />,
      },
      {
        type: ConditionTypes.CHART,
        id: "char-patterns-candlestick",
        name: "Candlestick",
        icon: <CandlestickChartIcon />,
      },
      {
        type: ConditionTypes.CHART,
        id: "char-patterns-hollow-candlestick",
        name: "Hollow candlestick",
        icon: <HollowCandlestickChartIcon />,
      },
      {
        type: ConditionTypes.CHART,
        id: "char-patterns-line",
        name: "Line",
        icon: <LineChartIcon />,
      },
      {
        type: ConditionTypes.CHART,
        id: "char-patterns-area",
        name: "Area",
        icon: <AreaChartIcon />,
      },
    ],
  },
];

export enum setConditionDroppableElements {
  IF_0 = "if_0",
  IF_1 = "if_1",
  IF_2 = "if_2",
  THEN = "then",
  CHART = "chart",
  INTERVAL = "interval",
}
