import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalsState {
  id: string;
  isOpen: boolean;
}

const initialState: ModalsState[] = [
  {
    id: "condition-0",
    isOpen: false,
  },
  {
    id: "condition-1",
    isOpen: false,
  },
  {
    id: "assetBar-0",
    isOpen: false,
  },
  {
    id: "assetBar-1",
    isOpen: false,
  },
];

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    handleModalVisibilityAction(state, action: PayloadAction<ModalsState>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) {
        found.isOpen = action.payload.isOpen;
        return;
      }
      state.push({
        id: action.payload.id,
        isOpen: action.payload.isOpen,
      });
    },
  },
});

export const { handleModalVisibilityAction } = modalsSlice.actions;
export default modalsSlice.reducer;
