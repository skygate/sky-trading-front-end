import { combineReducers, configureStore } from "@reduxjs/toolkit";
import strategyCreationReducer from "./strategyCreationSlice";
import conditionsReducer from "./conditionsSlice";
import undoable from "redux-undo";
import modalsReducer from "./modalsSlice";
import allocationReducer from "./allocationSlice";
import commentsReducer from "./commentsSlice";
import draftsReducer from "./draftsSlice";

export const store = configureStore({
  reducer: {
    undoReducer: undoable(
      combineReducers({
        strategyCreation: strategyCreationReducer,
        conditions: conditionsReducer,
        modals: modalsReducer,
        allocation: allocationReducer,
        comments: commentsReducer,
      })
    ),
    drafts: draftsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
