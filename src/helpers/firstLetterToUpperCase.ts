export const firstLetterToUpperCase = (text: string) => {
  const firstLetter = text.split("")[0].toUpperCase();
  const restString = text.slice(1);

  return firstLetter + restString;
};
