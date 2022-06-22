import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { StrategyInterfaceElements } from "../constant";
import { strategyPlaceholder } from "./strategyInitialState";

interface StrategyCreationState {
  id: string;
  isExpanded: boolean;
  type: StrategyInterfaceElements;
  elements: StrategyCreationState[];
}

interface PushElementPayload {
  parentId: string;
  element: StrategyCreationState;
}

const initialState: StrategyCreationState = strategyPlaceholder;

const recursivePushElement = (
  elements: StrategyCreationState[],
  id: string,
  element: StrategyCreationState
) => {
  const found = elements.find((item) => item.id === id);
  if (found) found.elements.push(element);
  elements.forEach((item) => {
    if (item.elements) {
      return recursivePushElement(item.elements, id, element);
    }
  });
};

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
    pushElement(state, action: PayloadAction<PushElementPayload>) {
      recursivePushElement(
        state.elements,
        action.payload.parentId,
        action.payload.element
      );
    },
  },
});

export const { expandItem, pushElement } = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
