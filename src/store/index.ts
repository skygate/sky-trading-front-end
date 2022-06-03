import { configureStore } from "@reduxjs/toolkit";
import strategyCreationReducer from "./strategyCreationSlice";

export const store = configureStore({
  reducer: {
    strategyCreation: strategyCreationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
