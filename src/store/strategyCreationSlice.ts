import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findStrategyElement } from "helpers/findStrategyElement";
import { StrategyInterfaceElements } from "../constant";
import { strategyPlaceholder } from "./strategyInitialState";

export interface StrategyCreationState {
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

const strategyCreationSlice = createSlice({
  name: "strategyCreation",
  initialState,
  reducers: {
    expandStrategyItemAction(state, action: PayloadAction<string>) {
      if (state.id === action.payload) {
        state.isExpanded = !state.isExpanded;
      } else {
        const elementToExpand = findStrategyElement(
          state.elements,
          action.payload
        );
        elementToExpand.isExpanded = !elementToExpand.isExpanded;
      }
    },
    pushStrategyElementAction(
      state,
      action: PayloadAction<PushElementPayload>
    ) {
      const parentElement = findStrategyElement(
        state.elements,
        action.payload.parentId
      );
      parentElement.elements.push(action.payload.element);
    },
  },
});

export const { expandStrategyItemAction, pushStrategyElementAction } =
  strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
