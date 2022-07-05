import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum AllocationTypes {
  PERCENT = "%",
  AMOUNT = "amount",
  SIZE = "size",
  CAPITAL = "capital",
}

export interface AllocationState {
  id: string;
  index: number;
  type: AllocationTypes | null;
  value: string | null;
  submitted?: boolean;
}

export interface UpdateAllocationPayload {
  id: string;
  type: AllocationTypes;
  value: string | null;
}

const initialState: AllocationState[] = [];

const allocationSlice = createSlice({
  name: "allocation",
  initialState,
  reducers: {
    addAllocation(state, action: PayloadAction<AllocationState>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (!found) state.push(action.payload);
    },

    updateAllocationAction(
      state,
      action: PayloadAction<UpdateAllocationPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) {
        found.type = action.payload.type;
        found.value = action.payload.value;
      }
    },
    submitAllocationAction(state, action: PayloadAction<string>) {
      const found = state.find((item) => item.id === action.payload);
      if (found) found.submitted = true;
    },
  },
});

export const { addAllocation, updateAllocationAction, submitAllocationAction } =
  allocationSlice.actions;
export default allocationSlice.reducer;
