import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assetsElement } from "constant/assets";

interface AssetsState {
  id: string;
  index: number;
  asset: null | assetsElement;
  set: boolean;
}

interface SetAssetActionPayload {
  id: string;
  asset: assetsElement;
}

const initialState: AssetsState[] = [
  {
    id: "assetBar-0",
    index: 0,
    asset: null,
    set: false,
  },
  {
    id: "assetBar-1",
    index: 1,
    asset: null,
    set: false,
  },
];

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {
    setAssetAction(state, action: PayloadAction<SetAssetActionPayload>) {
      const found = state.find((item) => item.id === action.payload.id);
      if (found) {
        found.asset = action.payload.asset;
        found.set = true;
      }
    },
    pushAssetAction(state, action: PayloadAction<AssetsState>) {
      state.push(action.payload);
    },
  },
});

export const { setAssetAction, pushAssetAction } = assetsSlice.actions;
export default assetsSlice.reducer;
