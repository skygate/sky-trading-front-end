import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategyInterfaceElements } from "../constant";
import { strategyPlaceholder } from "./strategyPlaceholder";

interface StrategyCreationState {
  id: string;
  isExpanded: boolean;
  type: StrategyInterfaceElements;
  elements: StrategyCreationState[];
}

const initialState: StrategyCreationState = strategyPlaceholder;

const recursiveHandleItemExpanding = (
  elements: StrategyCreationState[],
  id: string
) => {
  const found = elements.find((item) => item.id === id);
  if (found) {
    found.isExpanded = !found.isExpanded;
  } else {
    elements.forEach((item) => {
      if (item.elements) {
        return recursiveHandleItemExpanding(item.elements, id);
      }
    });
  }
};

const strategyCreationSlice = createSlice({
  name: "strategyCreation",
  initialState,
  reducers: {
    expandItem(state, action: PayloadAction<string>) {
      if (state.id === action.payload) {
        state.isExpanded = !state.isExpanded;
      } else {
        recursiveHandleItemExpanding(state.elements, action.payload);
      }
    },
  },
});

export const { expandItem } = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
