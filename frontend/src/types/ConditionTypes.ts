export enum setConditionDroppableElements {
  IF_0 = "if_0",
  IF_1 = "if_1",
  IF_2 = "if_2",
  THEN = "then",
  CHART = "chart",
  INTERVAL = "interval",
}

export interface ConditionInterface {
  type: ConditionTypes;
  destination: setConditionDroppableElements;
  id: string;
  name: string;
  icon: null | JSX.Element;
  needValue: boolean;
}

export enum ConditionTypes {
  INDICATORS = "indicators",
  CHART = "chart",
  PRICE_OPERATOR = "price_operator",
  CONDITION_OPERATOR = "condition_operator",
  THEN_OPERATOR = "then_operator",
  INTERVAL = "interval",
}

export interface ConditionDetailsInterface {
  [index: string]: null | ConditionInterface;
  if_0: null | ConditionInterface;
  if_1: null | ConditionInterface;
  if_2: null | ConditionInterface;
  then: null | ConditionInterface;
  chart: null | ConditionInterface;
  interval: null | ConditionInterface;
}
