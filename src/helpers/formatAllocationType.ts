import { firstLetterToUpperCase } from "./firstLetterToUpperCase";

export const formatAllocationType = (type: string, value: number | null) => {
  if (!value) return firstLetterToUpperCase(type);
  return `${firstLetterToUpperCase(type)} ${value}`;
};
