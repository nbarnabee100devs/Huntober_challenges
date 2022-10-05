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

function splitOnKey(str) {
  return str.split(/[Space]+/).join(" ");
}

function reverseIt(str) {
  return str.split("").reverse().join("");
}

function testIt(str) {
  let first = decodeString(str);
  let second = splitOnKey(first);
  let third = reverseIt(second);
  console.log(third);
}

// My current result is:
// sfQmg4ly#viO 1h DjVV^P YWLuDM2. A#1t00!wVdEHD dbv 8tll t)vg1!!
