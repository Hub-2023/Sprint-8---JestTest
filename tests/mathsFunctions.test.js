const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require("../functions/mathsFunctions")

test("Example Test", () => {
  const name = "bob";
  expect(name).toBe("bob");
});

test("Add numbers", () => {
  expect(addNumbers(2, 2)).toBe(4);
});

test("Subtract numbers", () => {
  expect(subtractNumbers(6, 2)).toBe(4);
});

test("Multiply numbers", () => {
  expect(multiplyNumbers(3, 2)).toBe(6);
});

test("Divide numbers", () => {
  expect(divideNumbers(8, 2)).toEqual(4);
});
