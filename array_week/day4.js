/* 

Today's challenge:  imagine an array as if it were a grid:
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] =>

[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

Write functions that will move elements "up" or "down" (e.g., in the above example, the 4 would move "up" and swap places with the 1)

So I'm swapping the values that exist at the same index position in the previous or the next array, depending on which function is being called.

So I would need to get the index value of the array that contains the particular value.

I checked SO and found a cool way of doing this...

let row = arr.findIndex(subArr => subArr.indexOf(value) !== -1)

Now I just have to see if array destructuring will work the same in a 2d array.

*/

function moveUp(arr, value) {
  let row = arr.findIndex((subArr) => subArr.indexOf(value) !== -1);
  if (row === -1) return "Value not found";
  else if (row === 0) return arr;
  else {
    let col = arr[row].indexOf(value);
    [arr[row][col], arr[row - 1][col]] = [arr[row - 1][col], arr[row][col]];
    return arr;
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(moveUp(matrix, 5)); // would expect [[1, 5, 3], [4, 2, 6], [7, 8, 9]]
// console.log(moveUp(matrix, 5)); // would expect the same
// console.log(moveUp(matrix, 12)); // would expect "Value not found"

// Oh that didn't work at all, but I realize I was being stupid and only counting the row itself, DUH
// Added a column value, though it wasn't as elegant as the version I found on SO
// At least "value not found" was working properly
// Making all sorts of stupid errors, though
// Ok, so I have successfully moved the value up, but at the cost of destroying the array from which the element was moved... arrgh
// Oh, wait, it's because I should be targeting the column value all of the time duhhhhh
// And now it works.  Great.

function moveDown(arr, value) {
  let row = arr.findIndex((subArr) => subArr.indexOf(value) !== -1);
  if (row === -1) return "Value not found";
  else if (row === arr.length - 1) return arr;
  else {
    let col = arr[row].indexOf(value);
    [arr[row][col], arr[row + 1][col]] = [arr[row + 1][col], arr[row][col]];
    return arr;
  }
}

// console.log(moveDown(matrix, 5)); // expect [[1, 2, 3], [4, 8, 6], [7, 5, 9]]
// console.log(moveDown(matrix, 5)); // expect same as above
// console.log(moveDown(matrix, 12)); // expect "value not found"

// Great success
