import { configureStore } from "@reduxjs/toolkit";
import strategyCreationReducer from "./strategyCreationSlice";
import strategyDetailsReducer from "./strategyDetailsSlice";

export const store = configureStore({
  reducer: {
    strategyCreation: strategyCreationReducer,
    strategyDetails: strategyDetailsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
