import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AllocationTypes {
  PERCENT = "%",
  AMOUNT = "amount",
  SIZE = "size",
  CAPITAL = "capital",
}

interface AllocationState {
  id: string;
  type: AllocationTypes;
  value: string | null;
  submitted: boolean;
}

const initialState: AllocationState[] = [];

const allocationSlice = createSlice({
  name: "allocation",
  initialState,
  reducers: {
    setAllocation(state, action: PayloadAction<AllocationState>) {
      let found = state.find((item) => item.id === action.payload.id);
      if (found) {
        found.type = action.payload.type;
        found.value = action.payload.value;
        found.submitted = action.payload.submitted;
      } else {
        state.push(action.payload);
      }
    },
    submitAllocation(state, action: PayloadAction<string>) {
      const found = state.find((item) => item.id === action.payload);
      if (found) found.submitted = true;
    },
  },
});

export const { setAllocation, submitAllocation } = allocationSlice.actions;
export default allocationSlice.reducer;
