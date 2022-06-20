import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetConditionsInterface } from "components/Modals/ConditionsModals/ConditionsModals";

interface ConditionsState {
  id: string;
  details: SetConditionsInterface;
  optimize: boolean;
  isAssetSet: boolean;
}

const initialState: ConditionsState[] = [
  {
    id: "condition-0",
    details: {
      if: [null, null, null],
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
    isAssetSet: false,
  },
  {
    id: "condition-1",
    details: {
      if: [null, null, null],
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
    isAssetSet: false,
  },
];

const conditionsSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    updateCondition(state, action: PayloadAction<ConditionsState>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) {
        found.details = action.payload.details;
      } else {
        state.push(action.payload);
      }
    },
    setIsAssetSet(state, action: PayloadAction<string>) {
      const index = parseInt(action.payload.split("-")[1]);
      state[index].isAssetSet = true;
    },
  },
});

export const { updateCondition, setIsAssetSet } = conditionsSlice.actions;
export default conditionsSlice.reducer;
