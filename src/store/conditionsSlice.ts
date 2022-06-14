import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetConditionsInterface } from "components/Modals/ConditionsModals/ConditionsModals";

interface ConditionsState {
  id: string;
  details: SetConditionsInterface;
  optimize: boolean;
}

const initialState: ConditionsState[] = [
  {
    id: "40ef2b6c-e27b-11ec-43ea-0242ac120002",
    details: {
      if: [null, null, null],
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
  },
  {
    id: "40ef2b6c-e27b-11ec-8fea-024poiu120002",
    details: {
      if: [null, null, null],
      then: null,
      chart: null,
      interval: null,
    },
    optimize: false,
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
  },
});

export const { updateCondition } = conditionsSlice.actions;
export default conditionsSlice.reducer;
