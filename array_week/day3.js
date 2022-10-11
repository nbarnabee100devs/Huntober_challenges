/*

This task requires me to write a function that will take an array of strings and move any entries that contain the letter "a" to the front, then moves any remaining entries that have over 3 characters to the back.  The order of the entries should remain the same.

Blaw mentioned that this was inspired by one of her favorite CodeWars katas: Move the Zeros to the Back.  And it sounded vaguely familiar so I went to look it up and, low and behold, I had actually done it.  Looked at the solution and oooh, interesting.

arr.filter(a => a.includes("a"))

to take out the a's

arr.filter(a => !(a.includes("a")).filter(a => a.length < 3).concat(arr.filter(a => !(a.includes("a")).filter(a => a.length >= 3)

Ok, that one is getting away from me a bit.

*/

myArr = ["hi", "hello", "howdy", "hola", "hej", "hallo", "heyyy"];

// would expect to get ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']

function swapARoo(arr) {
  return arr
    .filter((a) => a.includes("a"))
    .concat(
      arr
        .filter((a) => !a.includes("a") && a.length <= 3)
        .concat(arr.filter((a) => !a.includes("a") && a.length > 3))
    );
}

// Got a bit lost in the woods with that the first time, but I sorted it out (missing punctuation, as usual)
