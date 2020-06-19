const arrayAnalysis = require("./arrayAnalysis");

test("throws error if the argument passed is not an array of numbers", () => {
  expect(() => {
    arrayAnalysis({});
  }).toThrow();
  expect(() => {
    arrayAnalysis([1, 2, false]);
  }).toThrow("This function must be passed an array of numbers as an argument");
  expect(() => {
    arrayAnalysis([1, 2, 3]);
  }).not.toThrow();
});

test('returns an object with an "average" property which is equal to the mean averafe of the numbers in the array', () => {
  const result1 = arrayAnalysis([1, 2, 3]);
  expect(result1.average).toBe(2);
});

test('returns an object with a "length" property which is equal to the length of the array passed in', () => {
  const result1 = arrayAnalysis([1, 2, 3]);
  expect(result1.length).toBe(3);
});

test('returns an object with a "min" property which is equal to the minimum value within the array passed in', () => {
  const result1 = arrayAnalysis([1, 2, 3]);
  expect(result1.min).toBe(1);
});

test('returns an object with a "max" property which is equal to the maximum value within the array passed in', () => {
  const result1 = arrayAnalysis([1, 2, 3]);
  expect(result1.max).toBe(3);
});
