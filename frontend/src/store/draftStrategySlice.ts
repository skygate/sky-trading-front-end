import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OpenCloseStartegyElement {
  isExpanded: boolean;
  chartType: null | string;
  timeFrame: null;
  conditions: null;
  risk: null;
}

export interface AssetStrategyElement {
  isExpanded: boolean;
  symbol: null | string;
  description: null | string;
  market: null | string;
}

export interface AllocationStrategyElement {
  type: null;
  value: string | null;
  submitted: boolean;
}

interface draftStrategyState {
  [key: string]: any;
  id: string;
  isExpanded: boolean;
}

const initialState: draftStrategyState = {
  id: "",
  isExpanded: false,
};

const draftStrategySlice = createSlice({
  name: "draftStrategy",
  initialState,
  reducers: {
    setStrategyExpandedAction(state, action: PayloadAction<boolean>) {
      state.isExpanded = action.payload;
    },
    setStrategyElementExpandedAction(state, action: PayloadAction<string>) {
      state[action.payload].isExpanded = !state[action.payload].isExpanded;
    },
  },
});

export default draftStrategySlice.reducer;
export const { setStrategyExpandedAction, setStrategyElementExpandedAction } =
  draftStrategySlice.actions;
