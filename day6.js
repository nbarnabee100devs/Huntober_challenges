/*
Today's task:  write a function that accepts two arguments:  a string and a value, and removes every "value"th
character.  (e.g., 4 would remove every 4th character)
The counting should begin from the beginning of the string.
Of course I immediately see the problem:  as soon as you start removing characters, the index position of subsequent characters will be decreased.  One way around this problem would be to increment the value upwards... actually, I could probably do this using recursion.
*/

function removeEveryNthOld(str, n) {
  return recursiveRemover(str, n, n);
}

function recursiveRemover(str, n, step) {
  if (step >= str.length) {
    console.log(str);
    return str;
  } else {
    newStr = str.slice(0, step - 1) + str.slice(step);
    recursiveRemover(newStr, n, step + (n - 1));
  }
}

// For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// I would expect to return
// "This is Halloween! This is Halloween!"

// For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// I would expect to return
// "The Bachelor is a terrible television show."

const test1 = "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!";
const test2 = "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.";

// Oh, initially I screwed up because I was forgetting the 0th index, duh
// But I have another problem, in that the incrementation of n will depend on the initial value of n, which is
// going to change every time... hmm...

// Okay, I got the recursive bit to run but for some reason the return isn't working at all.

// Fine screw it I'll write it as a loop

function removeEveryNth(str, n) {
  for (i = n; i < str.length; i += n - 1) {
    str = str.slice(0, i - 1) + str.slice(i);
  }
  return str;
}

removeEveryNth(test1, 4);
removeEveryNth(test2, 5);

// Well actually that looks a hell of a lot cleaner
