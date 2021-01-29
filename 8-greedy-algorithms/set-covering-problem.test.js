const { findCoveringStations } = require("./set-covering-problem");

xit("should find stations which covers all the states", () => {
  const statesForStations = {
    stationOne: new Set(["id", "nv", "ut"]),
    stationTwo: new Set(["wa", "id", "mt"]),
    stationThree: new Set(["or", "nv", "ca"]),
    stationFour: new Set(["nv", "ut"]),
    stationFive: new Set(["ca", "az"]),
  };

  const statesNeeded = new Set([
    "mt",
    "wa",
    "or",
    "id",
    "nv",
    "ut",
    "ca",
    "az",
  ]);

  console.log(findCoveringStations(statesForStations, statesNeeded));
  // expect(findCoveringStations()).toBe();
});
