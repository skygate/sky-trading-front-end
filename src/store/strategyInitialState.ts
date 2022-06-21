import { StrategyInterfaceElements } from "../constant";

export const strategyPlaceholder = {
  id: "open",
  isExpanded: false,
  type: StrategyInterfaceElements.OPEN,
  elements: [
    {
      id: "condition-0",
      isExpanded: false,
      type: StrategyInterfaceElements.CONDITION,
      elements: [
        {
          id: "asset-0",
          isExpanded: false,
          type: StrategyInterfaceElements.ASSETS,
          elements: [
            {
              id: "assetBar-0",
              isExpanded: false,
              type: StrategyInterfaceElements.ASSETS_BAR,
              elements: [],
            },
          ],
        },
        {
          id: "addCondition-0",
          isExpanded: false,
          type: StrategyInterfaceElements.ADD_CONDITION,
          elements: [],
        },
      ],
    },
    {
      id: "close",
      isExpanded: false,
      type: StrategyInterfaceElements.CLOSE,
      elements: [
        {
          id: "condition-1",
          isExpanded: false,
          type: StrategyInterfaceElements.CONDITION,
          elements: [
            {
              id: "asset-1",
              isExpanded: false,
              type: StrategyInterfaceElements.ASSETS,
              elements: [
                {
                  id: "assetBar-1",
                  isExpanded: false,
                  type: StrategyInterfaceElements.ASSETS_BAR,
                  elements: [],
                },
              ],
            },
            {
              id: "addCondition-1",
              isExpanded: false,
              type: StrategyInterfaceElements.ADD_CONDITION,
              elements: [],
            },
          ],
        },
      ],
    },
  ],
};
