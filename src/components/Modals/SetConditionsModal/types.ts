import { ConditionInterface } from "constant/conditions";

export interface SetConditionsInterface {
  [index: string]: any;
  if: (null | ConditionInterface)[];
  then: null | ConditionInterface;
  chart: null | ConditionInterface;
  interval: null | ConditionInterface;
}
