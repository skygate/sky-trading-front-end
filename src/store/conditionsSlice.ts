import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConditionDetailsInterface } from "types/ConditionTypes";

export interface ConditionsState {
  id: string;
  index: number;
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
    id: "condition-0",
    index: 0,
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
    id: "condition-1",
    index: 1,
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
  reducers: {
    updateConditionAction(
      state,
      action: PayloadAction<UpdateConditionActionPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.details = action.payload.details;
    },
    setIsAssetSetAction(state, action: PayloadAction<string>) {
      const index = Number(action.payload.split("-")[1]);
      if (!isNaN(index)) state[index].isAssetSet = true;
    },
    setIndicatorValueAction(
      state,
      action: PayloadAction<SetValueActionPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.indicators[action.payload.key] = action.payload.value;
    },
    setIntervalsValueAction(
      state,
      action: PayloadAction<SetValueActionPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.intervals[action.payload.key] = action.payload.value;
    },
    setIndicatorAction(
      state,
      action: PayloadAction<SetIndicatorActionPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.indicatorSet = action.payload.value;
    },
    pushConditionAction(state, action: PayloadAction<ConditionsState>) {
      state.push(action.payload);
    },
  },
});

export const {
  updateConditionAction,
  setIsAssetSetAction,
  setIndicatorValueAction,
  setIntervalsValueAction,
  setIndicatorAction,
  pushConditionAction,
} = conditionsSlice.actions;
export default conditionsSlice.reducer;
