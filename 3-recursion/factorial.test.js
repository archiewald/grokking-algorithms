const { factorial } = require("./factorial");

it("should calculate a factorial", () => {
  expect(factorial(5)).toBe(120);
});
