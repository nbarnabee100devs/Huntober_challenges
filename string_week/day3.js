// Ok, now I need to write a replacer function that will take a set of key characters and a string, and replace any of the key characters that appear in the string with a space.

// For the sake of making a generalizable function, and because I'm not sure what form the key characters will come in, I'll be sure to convert it straight away.

/* With a key set of ['A','_','K','E','Y','!']
And a target string of
'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

I should expect the function to return 
' you could think this is hard to read before replacing the key characters'
*/

let testKey = ["A", "_", "K", "E", "Y", "!"],
  testString =
    "AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters";

function replaceWithSpace(key, target) {
  if (typeof key === "string") {
    key = Array.from(key);
  }
  let result = target
    .split("")
    .map((a) => (key.includes(a) ? " " : a))
    .join("");
  return result;
}
