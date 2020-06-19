const reverseString = require("./reverseString");

test("throws error when called with no arguments", () => {
  expect(() => {
    reverseString();
  }).toThrow();
});

test("returns a reversed string when given a string as an argument", () => {
  const result = reverseString("string");
  const result2 = reverseString("TEST");
  expect(typeof result).toBe("string");
  expect(result).toBe("gnirts");
  expect(result2).toBe("TSET");
});
