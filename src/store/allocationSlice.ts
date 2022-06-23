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
  value: number | null;
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
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { setAllocation } = allocationSlice.actions;
export default allocationSlice.reducer;
