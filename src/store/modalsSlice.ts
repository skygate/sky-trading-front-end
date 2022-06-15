import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalsState {
  id: string;
  isOpen: boolean;
}

const initialState: ModalsState[] = [
  {
    id: "40ef2b6c-e27b-11ec-43ea-0242ac120002",
    isOpen: false,
  },
  {
    id: "40ef2b6c-e27b-11ec-8fea-024poiu120002",
    isOpen: false,
  },
  {
    id: "40ef2b6c-egfb-11ec-8fea-0242ac120002",
    isOpen: false,
  },
  {
    id: "40ef2b6c-e27b-11ec-8fea-89z2ac120002",
    isOpen: false,
  },
];

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handleVisibility(state, action: PayloadAction<ModalsState>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.isOpen = action.payload.isOpen;
    },
  },
});

export const { handleVisibility } = modalsSlice.actions;
export default modalsSlice.reducer;
