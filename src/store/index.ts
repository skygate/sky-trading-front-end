import { combineReducers, configureStore } from "@reduxjs/toolkit";
import strategyCreationReducer from "./strategyCreationSlice";
import strategyDetailsReducer from "./strategyDetailsSlice";
import conditionsReducer from "./conditionsSlice";
import undoable from "redux-undo";
import modalsReducer from "./modalsSlice";

export const store = configureStore({
  reducer: {
    undoReducer: undoable(
      combineReducers({
        strategyCreation: strategyCreationReducer,
        strategyDetails: strategyDetailsReducer,
        conditions: conditionsReducer,
        modals: modalsReducer,
      })
    ),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
