function binarySearch(list, item) {
  let lowIndex = 0;
  let highIndex = list.length - 1;
  let midIndex = 0;

  while (lowIndex <= highIndex) {
    midIndex = Math.floor((lowIndex + highIndex) / 2);
    guessItem = list[midIndex];

    if (guessItem === item) {
      return midIndex;
    }

    if (guessItem > item) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }

  return null;
}

module.exports = { binarySearch };
