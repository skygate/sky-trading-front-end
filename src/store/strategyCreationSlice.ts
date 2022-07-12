import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { strategyInitialState, StrategyState } from "./strategyInitialState";

const initialState: StrategyState = strategyInitialState;

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
    setStrategyExpanded(state, action: PayloadAction<boolean>) {
      state.isExpanded = action.payload;
    },
    setStrategyElementExpanded(state, action: PayloadAction<string>) {
      console.log(state.isExpanded);
      state[action.payload].isExpanded = !state[action.payload].isExpanded;
    },
  },
});

export const {
  setStrategyExpanded,
  setStrategyElementExpanded,
  editNameAction,
  editDescriptionAction,
} = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
