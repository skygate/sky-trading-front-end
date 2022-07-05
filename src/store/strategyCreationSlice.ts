import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findStrategyElement } from "helpers/findStrategyElement";
import { StrategyInterfaceElements } from "../constant";
import { strategyPlaceholder } from "./strategyInitialState";

export interface StrategyCreationState {
  [index: string]: any;
  id: string;
  isExpanded: boolean;
  text?: string;
  type: StrategyInterfaceElements;
  elements: StrategyCreationState[];
}

export interface PushElementPayload {
  parentId: string;
  element: StrategyCreationState;
}

export interface UpdateElementPayload {
  id: string;
  key: string;
  value: string;
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
        if (elementToExpand)
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
      if (parentElement) parentElement.elements.push(action.payload.element);
    },
    updateStrategyElementAction(
      state,
      action: PayloadAction<UpdateElementPayload>
    ) {
      const elementToUpdate = findStrategyElement(
        state.elements,
        action.payload.id
      );
      if (elementToUpdate)
        elementToUpdate[action.payload.key] = action.payload.value;
    },
    pushStrategyConditionElementAction(
      state,
      action: PayloadAction<PushElementPayload>
    ) {
      const parentElement = findStrategyElement(
        state.elements,
        action.payload.parentId
      );
      if (parentElement) {
        const poped = parentElement.elements.pop();
        parentElement.elements.push(action.payload.element);
        if (poped) parentElement.elements.push(poped);
      }
    },
  },
});

export const {
  expandStrategyItemAction,
  pushStrategyElementAction,
  updateStrategyElementAction,
  pushStrategyConditionElementAction,
} = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
