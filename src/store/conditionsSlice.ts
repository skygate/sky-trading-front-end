import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetConditionsInterface } from "components/Modals/SetConditionsModal/types";

interface ConditionsState {
  id: string;
  index: number;
  details: SetConditionsInterface;
  optimize: boolean;
  isAssetSet: boolean;
}

interface UpdateConditionActionPayload {
  id: string;
  details: SetConditionsInterface;
}

const initialState: ConditionsState[] = [
  {
    id: "condition-0",
    index: 0,
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
    index: 1,
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
    updateConditionAction(
      state,
      action: PayloadAction<UpdateConditionActionPayload>
    ) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.details = action.payload.details;
    },
    setIsAssetSetAction(state, action: PayloadAction<string>) {
      const index = Number(action.payload.split("-")[1]);
      if (!isNaN(index)) state[index].isAssetSet = true;
    },
  },
});

export const { updateConditionAction, setIsAssetSetAction } =
  conditionsSlice.actions;
export default conditionsSlice.reducer;
