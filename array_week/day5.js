/* 

A two-parter today: first come up with a function (using the functions we've made) to shuffle a 2D array.  Then, look up how to do it properly.

We're shuffling arrays of X length with the sub arrays containing X primitive values.

So I'll bring in the work I've done so far...

*/

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/* 

So I'd have the following functions, and the values of row and col would be randomly generated.  Unlike the original functions, these aren't looking for a particular value.

*/

function moveLeft(arr, row, col) {
  if (col !== 0) {
    [arr[row][col], arr[row][col - 1]] = [arr[row][col - 1], arr[row][col]];
  }
  return arr;
}

function moveRight(arr, row, col) {
  if (col !== arr.length - 1) {
    [arr[row][col], arr[row][col + 1]] = [arr[row][col + 1], arr[row][col]];
  }
  return arr;
}

function moveUp(arr, row, col) {
  if (row !== 0)
    [arr[row][col], arr[row - 1][col]] = [arr[row - 1][col], arr[row][col]];
  return arr;
}

function moveDown(arr, row, col) {
  if (row !== arr.length - 1)
    [arr[row][col], arr[row + 1][col]] = [arr[row + 1][col], arr[row][col]];
  return arr;
}

function getRandom(num) {
  return Math.floor(Math.random() * num);
}

// Let's try it

function shuffle(arr, iterations) {
  if (iterations === 0) return arr;
  else {
    let x = arr.length;
    let row = getRandom(x);
    let col = getRandom(x);
    let moveDirection = getRandom(4);
    if (moveDirection === 0)
      return shuffle(moveLeft(arr, row, col), iterations - 1);
    else if (moveDirection === 1)
      return shuffle(moveRight(arr, row, col), iterations - 1);
    else if (moveDirection === 2)
      return shuffle(moveUp(arr, row, col), iterations - 1);
    else return shuffle(moveDown(arr, row, col), iterations - 1);
  }
}
