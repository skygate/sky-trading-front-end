export const firstLetterToUpperCase = (text: string) =>
  text
    .split("")
    .map((str, index) => (index === 0 ? str.toUpperCase() : str))
    .join("");
