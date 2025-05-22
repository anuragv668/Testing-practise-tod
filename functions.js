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

class calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  divide(x, y) {
    return x / y;
  }
  multiply(x, y) {
    return x * y;
  }
}

module.exports = {
  capitalize,
  reverse,
  calculator
};
