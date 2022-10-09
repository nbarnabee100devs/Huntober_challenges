let secretMessage =
  "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs";

// Apparently the calculator fix + space-adding function from day 2 + reverse should reveal something...

// I could practice importing these functions, but for the Calculator fix I'll bring everything over, since I'd done the key separately

// I've also no idea what she means about adding spaces with the day 2 key, because the day 2 key was literally " Space"   Uhh ok.  Unless I should be splitting on all of the values...

function decodeString(str) {
  const decoderArrayLetters = [
    "O",
    "I",
    "Z",
    "E",
    "h",
    "S",
    "G",
    "L",
    "B",
    "q",
  ];
  let decodedStr = "";
  for (let character of str) {
    if (character === " ") {
      decodedStr += " ";
    } else if (decoderArrayLetters.includes(character)) {
      decodedStr += String(decoderArrayLetters.indexOf(character));
    } else if (Number(character) >= 0 || Number(character) <= 9) {
      decodedStr += decoderArrayLetters[Number(character)];
    } else decodedStr += character;
  }
  return decodedStr;
}

// "Space" is the key here, because that was the clue from Day 2

function splitOnKey(str) {
  return str.split(/[Space]+/).join(" ");
}

function reverseIt(str) {
  return str.split("").reverse().join("");
}

function removeEveryNth(str, n) {
  for (i = n; i < str.length; i += n - 1) {
    str = str.slice(0, i - 1) + str.slice(i);
  }
  return str;
}

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

function testIt(str) {
  let first = decodeString(str);
  let second = splitOnKey(first);
  let third = reverseIt(second);
  // The result from Day 5 was 3
  let fourth = removeEveryNth(third, 3);
  let final = oppositeDay(fourth);
  console.log(final);
}

// And the solution is:
// HUNTOBER 1 week down. #100Devs WE GO GET!!

// Ideally I could go back and contain this all in an object, and split out the "Space" key, which would make this entire thing more generalizable.

// Blaw also suggested we try reverse-engineering the thing, to make a coding ring (effectively.)
// But I've not got time for that right now.
