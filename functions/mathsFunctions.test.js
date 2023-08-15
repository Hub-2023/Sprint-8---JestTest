const {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers,
  } = require("./mathsFunctions");
  
  test("Example Test", () => {
    const name = "bob";
    expect(name).toBe("bob");
  });
  
  test("addNumbers", () => {
    expect(addNumbers(2, 2)).toBe(4);
  });
  
  test("subtractNumbers", () => {
    expect(subtractNumbers(4, 2)).toBe(2);
  });
  
  test("multiplyNumbers", () => {
    expect(multiplyNumbers(4, 2)).toBe(8);
  });
  
  test("divideNumbers", () => {
    expect(divideNumbers(4, 2)).toBe(2);
  });
  