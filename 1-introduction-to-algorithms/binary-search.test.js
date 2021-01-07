const { binarySearch } = require("./binary-search");

it("should search the right item", () => {
  const list = [1, 3, 5, 7, 9];

  expect(binarySearch(list, 3)).toBe(1);
  expect(binarySearch(list, 7)).toBe(3);
  expect(binarySearch(list, 10)).toBe(null);
});
