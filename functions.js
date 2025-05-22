const capitalize = (word) => {
  let firstChar = word.charAt(0);
  let temp = firstChar.toUpperCase() + word.slice(1, word.length);
  return temp;
};

const reverse = (word) => {
  let temp ="";
  for(let i = word.length; i >= 0; i--) {
    temp += word.charAt(i);
  }
  return temp;
};

module.exports = {
  capitalize,
  reverse
};
