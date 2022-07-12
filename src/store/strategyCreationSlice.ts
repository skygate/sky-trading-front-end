import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { strategyInitialState } from "./strategyInitialState";

const initialState: StrategyState = strategyInitialState;

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

const strategyCreationSlice = createSlice({
  name: "strategyCreation",
  initialState,
  reducers: {
    editNameAction(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    editDescriptionAction(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setStrategyExpandedAction(state, action: PayloadAction<boolean>) {
      state.isExpanded = action.payload;
    },
    setStrategyElementExpandedAction(state, action: PayloadAction<string>) {
      console.log(state.isExpanded);
      state[action.payload].isExpanded = !state[action.payload].isExpanded;
    },
    updateAssetAction(state, action: PayloadAction<AssetStrategyElement>) {
      state.asset = action.payload;
    },
  },
});

export const {
  setStrategyExpandedAction,
  setStrategyElementExpandedAction,
  editNameAction,
  editDescriptionAction,
  updateAssetAction,
} = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
