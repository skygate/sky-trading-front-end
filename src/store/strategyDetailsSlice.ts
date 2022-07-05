import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StrategyDetailsState {
  name: string;
  description: string;
}

const initialState: StrategyDetailsState = {
  name: "",
  description: "",
};

const strategyDetailsSlice = createSlice({
  name: "strategyDetails",
  initialState,
  reducers: {
    editNameAction(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    editDescriptionAction(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export default strategyDetailsSlice.reducer;
export const { editNameAction, editDescriptionAction } =
  strategyDetailsSlice.actions;
