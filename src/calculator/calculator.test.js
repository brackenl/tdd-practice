const calculator = require("./calculator");

test("throws error if not called with an operation and 2 numbers as arguments", () => {
  expect(() => {
    calculator();
  }).toThrow("You must supply an operation and 2 numbers to this function");
  expect(() => {
    calculator(2, 2, 2);
  }).toThrow("You must supply an operation and 2 numbers to this function");
});

test("throws error if not supplied with a valid operation as an argument", () => {
  expect(() => {
    calculator("plus", 1, 1);
  }).toThrow(
    'You must supply "add", "subtract", "multiply" or "divide" as the operation argument'
  );
});

test("adds two numbers together and provides correct result when called with add operator", () => {
  const result1 = calculator("add", 1, 1);
  const result2 = calculator("add", 123213, 989080980);
  expect(result1).toBe(2);
  expect(result2).toBe(989204193);
});

test("subtracts second number from first and provides correct result when called with subtract operator", () => {
  const result1 = calculator("subtract", 1, 1);
  const result2 = calculator("subtract", 5675, 456456);
  expect(result1).toBe(0);
  expect(result2).toBe(-450781);
});

test("multiplies two numbers together and provides correct result when called with multiply operator", () => {
  const result1 = calculator("multiply", 2, 2);
  const result2 = calculator("multiply", 345, -234);
  expect(result1).toBe(4);
  expect(result2).toBe(-80730);
});

test("divides two numbers together and provides correct result when called with divide operator", () => {
  const result1 = calculator("divide", 2, 2);
  const result2 = calculator("divide", 345, -234);
  expect(result1).toBe(1);
  expect(result2).toBeCloseTo(-1.474358974); // dealing with floating point differences
});
