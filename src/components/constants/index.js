export const CARD_CONSTANTS = {
  userName: "Unknown",
};

export const GET_INITIAL = (str) => {
  const wordsArr = str.split(" ");
  const initialsArr = wordsArr.map((word) => word[0]);
  const initialsStr = initialsArr.join(" ");
  return initialsStr;
};
