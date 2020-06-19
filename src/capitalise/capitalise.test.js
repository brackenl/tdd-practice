const capitalise = require("./capitalise");

test("throws error when called with no arguments", () => {
  expect(() => {
    capitalise();
  }).toThrow();
});

test("returns a capitalised string when given a string as an argument", () => {
  const result = capitalise("string");
  const result2 = capitalise("TEST");
  expect(typeof result).toBe("string");
  expect(result).toBe("String");
  expect(result2).toBe("Test");
});
