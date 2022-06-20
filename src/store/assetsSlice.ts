import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assetsElement } from "constant/assets";

interface AssetsState {
  id: string;
  asset: null | assetsElement;
}

const initialState: AssetsState[] = [
  {
    id: "assetBar-0",
    asset: null,
  },
  {
    id: "assetBar-1",
    asset: null,
  },
];

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAsset(state, action: PayloadAction<AssetsState>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) found.asset = action.payload.asset;
    },
  },
});

export const { setAsset } = assetsSlice.actions;
export default assetsSlice.reducer;
