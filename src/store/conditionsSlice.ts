import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenCloseSectionTypes } from "components/StrategyInterface/OpenCloseSection/OpenCloseSection";
import { ConditionDetailsInterface } from "types/ConditionTypes";

export interface ConditionsState {
  section: OpenCloseSectionTypes;
  details: ConditionDetailsInterface;
  optimize: boolean;
  isAssetSet: boolean;
  indicators: {
    [key: string]: null | string;
    EMA: null | string;
    SMA: null | string;
  };
  intervals: {
    [key: string]: null | string;
    day: null | string;
  };
  indicatorSet: null | string;
  intervalSet: null | string;
}

export interface UpdateConditionActionPayload {
  id: string;
  details: ConditionDetailsInterface;
}

export interface SetValueActionPayload {
  id: string;
  key: string;
  value: string;
}

export interface SetIndicatorActionPayload {
  id: string;
  value: string;
}

const initialState: ConditionsState[] = [
  {
    section: OpenCloseSectionTypes.OPEN,
    details: {
      if_0: null,
      if_1: null,
      if_2: null,
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
    isAssetSet: false,
    indicators: {
      EMA: null,
      SMA: null,
    },
    intervals: {
      day: null,
    },
    indicatorSet: null,
    intervalSet: null,
  },
  {
    section: OpenCloseSectionTypes.CLOSE,
    details: {
      if_0: null,
      if_1: null,
      if_2: null,
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
    isAssetSet: false,
    indicators: {
      EMA: null,
      SMA: null,
    },
    intervals: {
      day: null,
    },
    indicatorSet: null,
    intervalSet: null,
  },
];

const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {},
});

export const {} = conditionsSlice.actions;
export default conditionsSlice.reducer;
