import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StrategyDetailsState {
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
    editName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    editDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
  },
});

export default strategyDetailsSlice.reducer;
export const { editName, editDescription } = strategyDetailsSlice.actions;
