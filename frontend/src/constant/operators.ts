import {
  ConditionTypes,
  setConditionDroppableElements,
} from "types/ConditionTypes";

export const OPERATORS = [
  {
    name: "group 1",
    elements: [
      {
        type: ConditionTypes.PRICE_OPERATOR,
        destination: setConditionDroppableElements.IF_0,
        id: "operator-price",
        name: "price",
        icon: null,
        needValue: false,
      },
    ],
  },
  {
    name: "group 2",
    elements: [
      {
        type: ConditionTypes.CONDITION_OPERATOR,
        destination: setConditionDroppableElements.IF_1,
        id: "operator-cross-above",
        name: "cross from above",
        icon: null,
        needValue: false,
      },
      {
        type: ConditionTypes.CONDITION_OPERATOR,
        destination: setConditionDroppableElements.IF_1,
        id: "operator-cross-below",
        name: "cross from below",
        icon: null,
        needValue: false,
      },
    ],
  },
  {
    name: "group 3",
    elements: [
      {
        type: ConditionTypes.THEN_OPERATOR,
        destination: setConditionDroppableElements.THEN,
        id: "operator-buy-short",
        name: "buy short",
        icon: null,
        needValue: false,
      },
      {
        type: ConditionTypes.THEN_OPERATOR,
        destination: setConditionDroppableElements.THEN,
        id: "operator-buy-ong",
        name: "buy long",
        icon: null,
        needValue: false,
      },
    ],
  },
  {
    name: "group 4",
    elements: [
      {
        type: ConditionTypes.INTERVAL,
        destination: setConditionDroppableElements.INTERVAL,
        id: "interval-days",
        name: "day/s",
        icon: null,
        needValue: true,
      },
    ],
  },
];
