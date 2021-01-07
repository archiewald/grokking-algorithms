function findMin(array) {
  let minElement = array[0];
  let minIndex = 0;

  for (let index = 1; index < array.length; index++) {
    if (array[index] < minElement) {
      minElement = array[index];
      minIndex = index;
    }
  }

  return minIndex;
}

/**
 *
 * @param {number[]} array
 */
function selectionSort(array) {
  let newArray = [];
  const steps = array.length;

  for (let index = 0; index < steps; index++) {
    let minElementIndex = findMin(array);
    newArray.push(array.splice(minElementIndex, 1)[0]);
  }

  return newArray;
}

module.exports = { selectionSort };
