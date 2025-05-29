const functions = require('./functions');
const calculator = new functions.calculator;

test("capitalize", () => {
  expect(functions.capitalize("world")).toBe("World");
  expect(functions.capitalize("hello")).toBe("Hello");
});

test("reverse", () => {
  expect(functions.reverse("rat")).toBe("tar");
  expect(functions.reverse("cat")).toBe("tac");
  expect(functions.reverse("hammer")).toBe("remmah");
});

test("calculator", () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.subtract(2, 1)).toBe(1);
  expect(calculator.divide(10, 2)).toBe(5);
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("caesarCipher", () => {
  expect(functions.caesarCipher('xyz', 3)).toBe('abc');
  expect(functions.caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(functions.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test("analyzeArray", () => {
  expect(functions.analyzeArray([1,8,3,4,2,6]).average).toBe(4);
  expect(functions.analyzeArray([1,8,3,4,2,6]).min).toBe(1);
  expect(functions.analyzeArray([1,8,3,4,2,6]).max).toBe(8);
  expect(functions.analyzeArray([1,8,3,4,2,6]).length).toBe(6);
  expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });

});
