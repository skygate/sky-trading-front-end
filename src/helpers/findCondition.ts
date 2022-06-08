import { CONDITIONS } from "constant/conditions";

export const findCondition = (id: string) => {
  for (const item of CONDITIONS) {
    const found = item.elements.find((item) => item.id === id);
    if (found) return found;
  }
};
