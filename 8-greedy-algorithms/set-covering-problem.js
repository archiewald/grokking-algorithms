/**
 *
 * @param {Object.<string, Set<string>>} statesForStations
 * @param {Set<string>} statesNeeded
 *
 * @returns {Set<string>}
 */
function findCoveringStations(statesForStations, statesNeeded) {
  let _statesNeeded = new Set(statesNeeded);
  const coveringStations = new Set();

  while (_statesNeeded.size) {
    let bestStation = null;
    let statesCovered = new Set();

    for (const [station, statesForStation] of Object.entries(
      statesForStations
    )) {
      const covered = intersection(statesNeeded, statesForStation);

      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }

    _statesNeeded = difference(_statesNeeded, statesCovered);
    coveringStations.add(bestStation);
  }

  return coveringStations;
}

function intersection(setA, setB) {
  return new Set([...setA].filter((x) => setB.has(x)));
}

function difference(setA, setB) {
  const _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

module.exports = { findCoveringStations };
