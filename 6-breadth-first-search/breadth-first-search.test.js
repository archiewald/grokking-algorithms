const { findMangoSeller } = require("./breadth-first-search");

it("should find a closest mango seller", () => {
  const graph = {
    you: ["alice", "bob", "claire"],
    bob: ["anuj", "peggy"],
    alice: ["peggy"],
    claire: ["thom", "jonny"],
    anuj: [],
    peggy: ["bim"],
    thom: [],
    jonny: [],
  };

  expect(findMangoSeller("you", graph)).toBe("thom");
});
