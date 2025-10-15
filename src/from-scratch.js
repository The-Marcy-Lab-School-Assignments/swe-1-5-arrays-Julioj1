const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value);
  } else if (isFront === false) {
    arr.push(value);
  }
  return;
};

const reverseString = (string) => {
  let newString = string.split("");
  newString = newString.reverse();
  newString = newString.join("");
  return newString;
};

const newArrayFullOf = (value, numOfValue) => {
  let newArr = Array(numOfValue);
  newArr.fill(value);
  return newArr;
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
