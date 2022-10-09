/* Final challenge for week 1: a function that swaps each letter of the 
alphabet for its opposite (e.g., a "b" - second letter from the beginning -
 would become a "Y" - second letter from the end and the opposite case)

 I think I'd like to do these two parts separately.  I'll write them assuming that I'll be calling one inside the other.
*/

const letterMap = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
};

function oppositeDay(str) {
  const arr = str.split("");
  const caseMap = {};
  arr.forEach((letter, index) => {
    if (letter === letter.toUpperCase()) caseMap[index] = "upper";
    else caseMap[index] = "lower";
  });
  caseSwap(arr, caseMap);
}

/* prettier-ignore */
function caseSwap(arr, cases) {
  const lowerArr = arr.map((a) => a.toLowerCase());
  const mixedLetters = lowerArr.map((a) => letterMap[a] ? letterMap[a] : a);
  const swappedArr = mixedLetters
    .map((a, i) => {
      if (cases[i.toString()] === "upper") {
        return a.toLowerCase()
      }
      else return a.toUpperCase()})
    .join("");
  console.log(swappedArr);
}

let test1 = "This is a Test";

/* This took ruddy forever.  Kept making all kinds of dumb mistakes.
But let's try it on the string I've been working with and see if something happens.
*/

let decoderString = "sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!";

/*  But immediately I see the problem:  the functions I've written can't deal with non-letter characters.  didn't even think about that!
But actually it was an easy fix.

I know I could make this better, but I don't feel like cleaning it up right now.  The solution is: HUNTOBER 1 week down. #100Devs WE GO GET!!

*/
