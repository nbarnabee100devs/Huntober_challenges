/* 
Today's task:  write two functions, one that swaps a given primitive value in an array with the value to its left, and the other that swaps a value with the value to the right.  Wait, as I write that out I realize that this sounds like a job for array destructuring.

Anyway, if the given value is at the edge of the array (e.g.  arr.indexOf(value) === 0 or arr.indexOf(value) === (arr.length - 1), don't move it.  And this should mutate the original array, not return something new.

*/

function moveLeft(arr, value) {
  let i = arr.indexOf(value);
  if (i !== 0) {
    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
  }
  return arr;
}

test1 = [1, 2, 3, 4];
// moveLeft(test1, 2);
// I would expect to get [2, 1, 3, 4], and I succeeded after I stopped being dumb.
// Of course the opposite is the same.. so to speak

function moveRight(arr, value) {
  let i = arr.indexOf(value);
  if (i !== arr.length - 1) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

moveRight(test1, 2);
// would expect [1, 3, 2, 4]
// but it doesn't work.  When I do it manually in the editor, though, it does work
// Oh, the problem was that I was already mutating the array by running moveLeft() duh
// and once I disabled the other function call it worked fine

// Here are blaw's test cases:

myArray = ["abc", "xyz", 1, 2, "Hey!"];

console.log(moveLeft(myArray, "xyz"));
console.log(moveLeft(myArray, "xyz"));
console.log(moveRight(myArray, 2));
console.log(moveRight(myArray, 2));

// Works like a charm!
