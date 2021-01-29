const { quicksort } = require("./quicksort");

it("should sort an array", () => {
  expect(quicksort([3, 6, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5, 6]);
});
