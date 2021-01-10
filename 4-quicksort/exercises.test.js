const { sum, length, max, binarySearch } = require("./exercises");

it("should calculate sum of array elements", () => {
  expect(sum([1, 2, 3, 4])).toBe(10);
});

it("should calculate array length", () => {
  expect(length([1, 2, 3, 4])).toBe(4);
});

it("should calculate max from array elements", () => {
  expect(max([1, 2, 7, 3, 4, 5])).toBe(7);
});

it("should find element", () => {
  // expect(binarySearch([2, 4, 6, 8, 10, 12], 10)).toBe(4);
  expect(binarySearch([2, 4, 6, 8, 10, 12], 11)).toBe(null);
});
