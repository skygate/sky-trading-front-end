import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface draftsState {
  id: number;
  name: string;
  date: Date;
}
const initialState: draftsState[] = [];

const draftsSlice = createSlice({
  name: "drafts",
  initialState,
  reducers: {
    deleteDraftAction(state, action: PayloadAction<number>) {
      return state.filter((item) => item.id !== action.payload);
    },
    pushDraftAction(state, action: PayloadAction<draftsState>) {
      state.push(action.payload);
    },
  },
});

export const { deleteDraftAction, pushDraftAction } = draftsSlice.actions;
export default draftsSlice.reducer;
