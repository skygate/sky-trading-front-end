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

export const CONDITIONS: ConditionsType = [
  {
    name: "indicators",
    elements: [
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-ema",
        name: "EMA",
        icon: null,
        value: null,
        needValue: true,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-sma",
        name: "SMA",
        icon: null,
        value: null,
        needValue: true,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-stochastic",
        name: "Stochastic",
        icon: null,
        value: null,
        needValue: false,
      },
      {
        type: ConditionTypes.INDICATORS,
        destination: setConditionDroppableElements.IF_2,
        id: "indicators-rsi",
        name: "RSI",
        icon: null,
        value: null,
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
        value: null,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-candlestick",
        name: "Candlestick",
        icon: <CandlestickChartIcon />,
        value: null,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-hollow-candlestick",
        name: "Hollow candlestick",
        icon: <HollowCandlestickChartIcon />,
        value: null,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-line",
        name: "Line",
        icon: <LineChartIcon />,
        value: null,
        needValue: false,
      },
      {
        type: ConditionTypes.CHART,
        destination: setConditionDroppableElements.CHART,
        id: "char-patterns-area",
        name: "Area",
        icon: <AreaChartIcon />,
        value: null,
        needValue: false,
      },
    ],
  },
];
