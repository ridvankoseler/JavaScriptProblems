// Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.

function reverseString(str) {
    let a;
    a = str.split("").reverse().join("");
  return a;
}

console.log(reverseString("hello"));
