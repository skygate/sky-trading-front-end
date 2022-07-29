import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface draftsState {
  id: number | string;
  name: string;
  date: Date;
}
const initialState: draftsState[] = [];

const draftsSlice = createSlice({
  name: "drafts",
  initialState,
  reducers: {
    deleteDraftAction(state, action: PayloadAction<number | string>) {
      return state.filter((item) => item.id !== action.payload);
    },
    pushDraftAction(state, action: PayloadAction<draftsState>) {
      state.push(action.payload);
    },
  },
});

export const { deleteDraftAction, pushDraftAction } = draftsSlice.actions;
export default draftsSlice.reducer;
