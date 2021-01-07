const { selectionSort } = require("./selection-sort");

it("should sort an array", () => {
  expect(selectionSort([3, 2, 5, 1, 10])).toEqual([1, 2, 3, 5, 10]);
});
