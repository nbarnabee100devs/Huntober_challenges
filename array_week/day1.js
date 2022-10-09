/* Today's challenge is to write a function that will compare two 
two-dimensional arrays (i.e., arrays that contain arrays) and see if they 
are equal.  
These arrays have a particular structure, to wit they are of equal size,
will each contain some number of arrays, and each of those arrays will
contain that same number of primitive elements.

e.g.,
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

which all have three nested arrays of three strings
I was thinking about destructing and such but... wait.. couldn't I just
be a cheeky bastard and use .join()?
*/

// function checkEquality(arr1, arr2) {
//   return arr1.join("") === arr2.join("");
// }

const checkEquality = (arr1, arr2) => arr1.join("") === arr2.join("");

const arr1 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const arr2 = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];
const arr3 = [
  ["a", "B", "c"],
  ["d", "E", "f"],
  ["g", "H", "i"],
];
const arr4 = [
  ["a", "b", "c"],
  ["g", "h", "i"],
  ["d", "e", "f"],
];

// Of these, only arr1 and arr2 should return TRUE
// Yeah that totally works, lol
