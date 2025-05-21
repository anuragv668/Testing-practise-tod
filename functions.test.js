const functions = require('./functions');

test("capitalize", () => {
  expect(functions.capitalize("world")).toBe("World");
  expect(functions.capitalize("hello")).toBe("Hello");
});
