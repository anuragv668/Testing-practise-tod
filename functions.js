const capitalize = (word) => {
  let firstChar = word.charAt(0);
  let temp = firstChar.toUpperCase() + word.slice(1, word.length);
  return temp;
};

module.exports = {
  capitalize
};
