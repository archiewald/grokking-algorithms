const { Queue } = require("./queue");

/**
 * finds mango seller. Mango seller name ends with "m"
 * @param {string} name
 * @param {{[seller: string]: string[]}} graph
 */
function findMangoSeller(name, graph) {
  const searchQueue = new Queue(...graph[name]);
  const searched = [];

  while (searchQueue.size > 0) {
    const person = searchQueue.dequeue();
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        return person;
      } else {
        searchQueue.enqueue(...graph[person]);
        searched.push(person);
      }
    }
  }

  return null;
}

/**
 *
 * @param {string} person
 */
function isSeller(person) {
  return person[person.length - 1] === "m";
}

module.exports = { findMangoSeller };
