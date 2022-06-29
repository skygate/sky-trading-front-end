import { CONDITIONS } from "constant/conditions";
import { OPERATORS } from "constant/operators";

export const findCondition = (id: string) => {
  for (const item of CONDITIONS) {
    const found = item.elements.find((item) => item.id === id);
    if (found) return found;
  }
  for (const item of OPERATORS) {
    const found = item.elements.find((item) => item.id === id);
    if (found) return found;
  }
};
