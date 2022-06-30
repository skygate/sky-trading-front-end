import {
  AreaChartIcon,
  BarChartIcon,
  CandlestickChartIcon,
  HollowCandlestickChartIcon,
  LineChartIcon,
} from "assets/icons";
import {
  ConditionInterface,
  ConditionTypes,
  setConditionDroppableElements,
} from "types/ConditionTypes";

export type ConditionsType = { name: string; elements: ConditionInterface[] }[];

export enum IndicatorsNames {
  EMA = "EMA",
  SMA = "SMA",
  STOCHASTIC = "Stochastic",
  RSI = "RSI",
}

export const CONDITIONS: ConditionsType = [
  {
    name: "indicators",
    elements: [
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-ema",
        name: IndicatorsNames.EMA,
        icon: null,
        needValue: true,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-sma",
        name: IndicatorsNames.SMA,
        icon: null,
        needValue: true,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-stochastic",
        name: IndicatorsNames.STOCHASTIC,
        icon: null,
        needValue: false,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-rsi",
        name: IndicatorsNames.RSI,
        icon: null,
        needValue: false,
      },
    ],
  },
  {
    name: "Chart patterns",
    elements: [
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-bars",
        name: "bars",
        icon: <BarChartIcon />,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-candlestick",
        name: "Candlestick",
        icon: <CandlestickChartIcon />,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-hollow-candlestick",
        name: "Hollow candlestick",
        icon: <HollowCandlestickChartIcon />,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-line",
        name: "Line",
        icon: <LineChartIcon />,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-area",
        name: "Area",
        icon: <AreaChartIcon />,
        needValue: false,
      },
    ],
  },
];
