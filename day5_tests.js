/* 
Okayyy things are getting a little stranger now.  I have a string and need to do some things to it...
*/

const testStr =
  "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";

/* 
I need to determine how many of these entries match a very long list of criteria.  First step will obviously be to split the string on "," and then start filtering. */

// Decided to write each of these functions in turn and test them.

function splitString(str) {
  return str.split(",");
}

// 1. No blank spaces at beginning or end.
// So if pun.trim() !== pun it's out.

function trimTest(arr) {
  return arr.filter((pun) => pun.trim() === pun);
}

let test1 = ["A good boy", " A not good boy", "A very bad boy "];

// would expect "A good boy" to pass  PASSED

// 2. Cannot contain "dog," "bark," or "bone" in any combination of upper or lowercase letters.  My first thought was that I'd need to use RegEx, but actually I could do "indexOf."  Oh, no, wait, I can't, because of the whole "upper or lower case letters" thing.
// pun.match(/dog|bark|bone/gi)  -> this would need to return "null"

function naughtyWordFilter(arr) {
  return arr.filter((pun) => pun.match(/dog|bone|bark/gi) == null);
}

let test2 = [
  "A good boy",
  "cat and dog show",
  "cat and Dog",
  "DOG and cat",
  "dOg and cat",
  "boney m",
  "bone and ball",
  "bark bark",
  "does good",
];

// would expect "A good boy" and "does good" to pass  PASSED

// 3. Total length of pun cannot be a multiple of 5.
// so pun.length%5 must be true

function lengthMultipleTest(arr) {
  return arr.filter((pun) => pun.length % 5);
}

let test3 = ["test", "test2", "testignfah", "tw efsa, f"];

// would expect "test" to pass  PASSED

// 4. Sum of the charCodes of the 1st and last characters must be odd.
// (pun.charCodeAt(0) + pun.charCodeAt(pun.length-1))%2 must be true

function charCodeSumFilter(arr) {
  return arr.filter(
    (pun) => (pun.charCodeAt(0) + pun.charCodeAt(pun.length - 1)) % 2
  );
}

let test4 = ["abc", "aa", "ab"];
// would expect "ab" to pass, though initially I'd written it wrong because I forgot that it needed to be odd duh.  PASSED

// 5. Character directly after the middle of the string may not be "e"
// This is going to refer to pun.charAt(Math.ceil(pun.length/2)) !== "e"
// for an even lettered string, e.g. "center" she's looking for the letter at index 3, or half the length.  for an odd lettered string, e.g. "weird" she'd also want the letter at index 3, or half the length (2.5) rounded up

function centerCharFilter(arr) {
  return arr.filter((pun) => pun.charAt(Math.ceil(pun.length / 2)) != "e");
}

let test5 = ["were", "weren", "where", "whher", "whhEr"];

// would expect "were", "where" and "whhEr" to pass  PASSED

// 6. Must have an even number of lowercase letters.  This is another job for regex.
// !pun.match(/[a-z]/g).length%2

function lowerEvenFail(arr) {
  return arr.filter((pun) => !pun.match(/[a-z]/g).length % 2);
}

let test6 = ["bob", "jane", "Bob", "Jane"];

// would expect "jane" and "Bob" to pass  but this FAILED

// 7. Must have at least 2 capital letters.  Another job for regex.
// pun.match(/[A-Z]/g).length >= 2

function twoCapitalsFail(arr) {
  return arr.filter((pun) => pun.match(/[A-Z]/g).length >= 2);
}

let test7 = ["BoB", "BOB", "bob", "Bob"];

// would expect "BoB" and "BOB" to pass but this also FAILED

/*
8. Must not contain a capital S.
I could do regex, or I could just do
pun.indexOf("S") === -1
*/

function noBigS(arr) {
  return arr.filter((pun) => pun.indexOf("S") === -1);
}

let test8 = ["sally", "Sally", "dogs", "dogS"];

// would expect "sally" and "dogs" to pass  PASSED

// so on the first go-round everything passed except those functions where I chained .match and .length

/* ----  TRY AGAIN ------ */

// 6. Must have an even number of lowercase letters.

function lowerEven(arr) {
  return arr.filter((pun) => !(pun.match(/[a-z]/g).length % 2));
}

//let test6 = ["bob", "jane", "Bob", "Jane"];

// Tried to see if chaining .match and .length did in fact produce what I wanted, and it did.
// After stepping carefully through each bit, realized that the problem was that I should have enclosed the function chain in parentheses.
// Sorted

// 7. Must have at least 2 capital letters.  Another job for regex.
// pun.match(/[A-Z]/g).length >= 2

function twoCapitals(arr) {
  return arr.filter(
    (pun) => pun.match(/[A-Z]/g) && pun.match(/[A-Z]/g).length >= 2
  );
}

//let test7 = ["BoB", "BOB", "bob", "Bob"];

// would expect "BoB" and "BOB" to pass but this also FAILED
// the problem is that if there are no matches it returns null, not an empty array.  oops!
// so I'll just toss an && in there to first check whether said array exists at all.  obviously if it doesn't, then it must be CULLED
// success!
