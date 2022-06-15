import { createSlice } from "@reduxjs/toolkit";
import { assetsElement } from "constant/assets";

interface AssetsState {
  id: string;
  asset: null | assetsElement;
}

const initialState: AssetsState[] = [
  {
    id: "40ef2b6c-e27b-11ec-8fea-0242ac1rtf02",
    asset: null,
  },
  {
    id: "40ef2b6c-e27b-11ec-8fea-0242cds20002",
    asset: null,
  },
];

const assetsSlice = createSlice({
  name: "assets",
  initialState,
  reducers: {},
});

export default assetsSlice.reducer;
