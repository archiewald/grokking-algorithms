/**
 * exercise 4.1
 * @param {number[]} array
 */
function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  const [first, ...rest] = array;

  return first + sum(rest);
}

/**
 * exercise 4.2
 * doesn't make much sense :D
 * @param {number[]} array
 */
function length(array) {
  if (array.length === 0) {
    return 0;
  }

  const [, ...rest] = array;

  return 1 + length(rest);
}

/**
 * exercise 4.3
 * @param {number[]} array
 */
function max(array) {
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  }

  const [first, ...rest] = array;
  const _max = max(rest);

  return first > _max ? first : _max;
}

/**
 * exercise 4.4
 * can we have a more elegant solution here?
 * @param {number[]} array
 * @param {number} item
 * @param {number} _lowIndex private! used in recursive calls
 * @param {number} _highIndex private! used in recursive calls
 */
function binarySearch(array, item, lowIndex = 0, highIndex = array.length - 1) {
  if (lowIndex > highIndex) {
    return null;
  }

  midIndex = Math.floor((lowIndex + highIndex) / 2);
  const guessItem = array[midIndex];

  if (item === guessItem) {
    return midIndex;
  }

  if (guessItem > item) {
    return binarySearch(array, item, lowIndex, midIndex - 1);
  }

  return binarySearch(array, item, midIndex + 1, highIndex);
}

module.exports = { sum, length, max, binarySearch };
