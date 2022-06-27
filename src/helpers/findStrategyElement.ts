import { StrategyCreationState } from "store/strategyCreationSlice";

export const findStrategyElement = (
  elements: StrategyCreationState[],
  id: string
) => {
  const found = elements.find((item) => item.id === id);
  let result = null;
  if (found) return found;
  elements.forEach((item) => {
    if (item.elements) {
      const recurency = findStrategyElement(item.elements, id);
      if (recurency) result = recurency;
    }
  });
  if (result) return result;
};
