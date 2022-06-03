import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StrategyInterfaceElements } from "../constant";

interface StrategyCreationState {
  id: string;
  isExpanded: boolean;
  type: StrategyInterfaceElements;
  elements: StrategyCreationState[];
}

const initialState: StrategyCreationState = {
  id: "40ef2b6c-e27b-11ec-8fea-0242ac120002",
  isExpanded: false,
  type: StrategyInterfaceElements.OPEN,
  elements: [
    {
      id: "40ef2b6c-e27b-11ec-43ea-0242ac120002",
      isExpanded: false,
      type: StrategyInterfaceElements.CONDITION,
      elements: [
        {
          id: "40ef2b6c-e27b-11ec-8fea-0242ac1rtf02",
          isExpanded: false,
          type: StrategyInterfaceElements.ASSETS,
          elements: [
            {
              id: "40ef2b6c-egfb-11ec-8fea-0242ac120002",
              isExpanded: false,
              type: StrategyInterfaceElements.ASSETS_BAR,
              elements: [],
            },
          ],
        },
        {
          id: "40ef2b6c-e27b-11ec-8fea-0242ac000002",
          isExpanded: false,
          type: StrategyInterfaceElements.ADD_CONDITION,
          elements: [],
        },
      ],
    },
    {
      id: "40ef2b6c-e27b-11ec-8fea-024qwer0002",
      isExpanded: false,
      type: StrategyInterfaceElements.CLOSE,
      elements: [
        {
          id: "40ef2b6c-e27b-11ec-8fea-024poiu120002",
          isExpanded: false,
          type: StrategyInterfaceElements.CONDITION,
          elements: [
            {
              id: "40ef2b6c-e27b-11ec-8fea-0242cds20002",
              isExpanded: false,
              type: StrategyInterfaceElements.ASSETS,
              elements: [
                {
                  id: "40ef2b6c-e27b-11ec-8fea-89z2ac120002",
                  isExpanded: false,
                  type: StrategyInterfaceElements.ASSETS_BAR,
                  elements: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const strategyCreationSlice = createSlice({
  name: "strategyCreation",
  initialState,
  reducers: {
    expandItem(state, action: PayloadAction<string>) {
      const recurencyFn: any = (elements: StrategyCreationState[]) => {
        const finded = elements.find((item) => item.id === action.payload);
        if (finded) {
          finded.isExpanded = !finded.isExpanded;
        } else {
          elements.forEach((item) => {
            if (item.elements) {
              return recurencyFn(item.elements);
            }
          });
        }
      };

      if (state.id === action.payload) {
        state.isExpanded = !state.isExpanded;
      } else {
        recurencyFn(state.elements);
      }
    },
  },
});

export const { expandItem } = strategyCreationSlice.actions;
export default strategyCreationSlice.reducer;
