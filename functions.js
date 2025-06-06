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

const caesarCipher = (str, num) => { 
  return str.split('')
    .map((item) => {
      if (item >= 'A' && item <= 'Z') {
        let base = 'A'.charCodeAt(0);
        return String.fromCharCode((item.charCodeAt(0) - base + num) % 26 + base);
      } else if (item >= 'a' && item <= 'z') {
        let base = 'a'.charCodeAt(0);
        return String.fromCharCode((item.charCodeAt(0) - base + num) % 26 + base);
      } else {
        return item;
      }
    })
    .join('');
};

const analyzeArray = (array) => {
  let average = array.reduce((sum, current) => {
    return sum + current;
  }, 0) / array.length;

  let min = array.reduce((previous, current) => {
    if (current > previous) {
      return previous;
    } 
    return current;
  }, array[0]);

  let max = array.reduce((previous, current) => {
    if (current < previous) {
      return previous;
    } 
    return current;
  }, array[0]);

  let length = array.length;

  return {
    average,
    min,
    max,
    length
  }
}

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray
};
