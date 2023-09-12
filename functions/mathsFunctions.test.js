const mathsFunctions = require("./mathsFunctions");

test ('Adding positive numbers together',  () => {
    expect(mathsFunctions.addNumbers(1,2)).toBe(3);
  });

  test ('Subtracting negative numbers together',  () => {
    expect(mathsFunctions.subtractNumbers(2,1)).toBe(1);
  });

  test ('multiplying numbers together',  () => {
    expect(mathsFunctions.multiplyNumbers(3,4)).toBe(12);
  });

  test ('dividing numbers together',  () => {
    expect(mathsFunctions.divideNumbers(12, 6)).toBe(2);
  });