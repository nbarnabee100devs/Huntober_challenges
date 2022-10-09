// Day 1

/* Got to decipher some mixed letters.

'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'

My first thought is to use object keys to sort this out.  I wonder if there's a way to do it bi-directional, but I can't immediately think of one, so I guess I'll do it the "long" way.
Although actually, since it's 0-9, I could just as easily use an array and rely on index values.  That would also make it easier to be bi-directional, as I could do an arr.includes() check.
*/

const decoderArrayLetters = ["O", "I", "Z", "E", "h", "S", "G", "L", "B", "q"];

let test = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.";

/* when running the test through the function I'm going to write, I'd expect to receive the following result:
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
*/

function decodeString(str) {
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

// well this is not the nicest solution by a long shot, and for some reason it was eating all of the whitespace characters
// I'm sure this is a job for regex
