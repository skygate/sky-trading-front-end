import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OpenCloseModals {
  [key: string]: any;
  chart: boolean;
  timeFrame: boolean;
  conditions: boolean;
  risk: boolean;
}

export interface ModalsState {
  [key: string]: any;
  open: OpenCloseModals;
  close: OpenCloseModals;
  asset: boolean;
  interval: boolean;
  allocation: boolean;
}

export interface HandleModalVisibilityPayload {
  key1: string;
  key2?: string;
  value: boolean;
}

const initialState: ModalsState = {
  open: {
    chart: false,
    timeFrame: false,
    conditions: false,
    risk: false,
  },
  close: {
    chart: false,
    timeFrame: false,
    conditions: false,
    risk: false,
  },
  asset: false,
  interval: false,
  allocation: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handleModalVisibilityAction(
      state,
      action: PayloadAction<HandleModalVisibilityPayload>
    ) {
      if (action.payload.key2) {
        state[action.payload.key1][action.payload.key2] = action.payload.value;
      } else {
        state[action.payload.key1] = action.payload.value;
      }
    },
  },
});

export const { handleModalVisibilityAction } = modalsSlice.actions;
export default modalsSlice.reducer;
