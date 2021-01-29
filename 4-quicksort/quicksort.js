/**
 *
 * @param {number[]} array
 */
function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const [pivot, ...rest] = array;
  const less = [],
    greater = [];

  rest.forEach((element) => {
    if (element > pivot) {
      greater.push(element);
      return;
    }

    less.push(element);
  });

  return quicksort(less).concat([pivot], quicksort(greater));
}

module.exports = { quicksort };
