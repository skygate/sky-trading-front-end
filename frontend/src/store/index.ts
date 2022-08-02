import {
  AnyAction,
  combineReducers,
  configureStore,
  Reducer,
  CombinedState,
} from "@reduxjs/toolkit";
import strategyCreationReducer, {
  StrategyState,
} from "./strategyCreationSlice";
import conditionsReducer, { ConditionsState } from "./conditionsSlice";
import undoable, { StateWithHistory } from "redux-undo";
import modalsReducer, { ModalsState } from "./modalsSlice";
import commentsReducer, { CommentsState } from "./commentsSlice";
import { strategyApi } from "./strategyApi";

export const store = configureStore({
  reducer: {
    undoReducer: undoable(
      combineReducers({
        strategyCreation: strategyCreationReducer,
        conditions: conditionsReducer,
        modals: modalsReducer,
        comments: commentsReducer,
      })
    ) as Reducer<
      StateWithHistory<
        CombinedState<{
          strategyCreation: StrategyState;
          conditions: ConditionsState[];
          modals: ModalsState;
          comments: CommentsState;
        }>
      >,
      AnyAction
    >,
    [strategyApi.reducerPath]: strategyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strategyApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
