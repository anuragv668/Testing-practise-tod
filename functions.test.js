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
