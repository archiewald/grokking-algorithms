// nothing really to test, just run
// node ./3-recursion/countdown.js

function countdown(i) {
  console.log(i);

  if (i <= 0) {
    return;
  }

  countdown(i - 1);
}

countdown(20);
