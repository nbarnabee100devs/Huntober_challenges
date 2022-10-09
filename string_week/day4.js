// Today's task: reverse a string while maintaining all characters and spacing.  Well that seems easy; didn't I already write this?

function reverse(str) {
  return str.split("").reverse().join("");
}

// if this works, then the following two strings should be equal:

let str1 =
  "   The white space at the beginning of this string doesn't match the whitespace at the end. ";

let str2 =
  " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   ";

// And, indeed, on loading the function and running it, reverse(str1) == str2 and vice versa.
