function isPalindrome(word) {

  switch (word.length) {
    case 0:
      const newString = prompt("Oops! That was an empty string. Please enter a string here:");
      return isPalendrome(newString);
    case 1:
      return true;
    default:
      return palindromeTester(word);
  }
}

function palindromeTester(word) {
  let end = word.length-1;

  for (let startIndex = 0; startIndex < (word.length-1)/2; startIndex++) {
    const endIndex = end - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;

}

/* 
  Add your pseudocode here
  - Accept the string and return edge cases (empty or single char strings)
  - set up two variables, pointing to the first and last letters
  - iterate through the string (n/2) times
  - for odd nums there will be one redundant check (middle char), but not a huge issue?
  - return false if not matching
  - else return true

*/

/*
  Add written explanation of your solution here
    - write a function that returns true if the string provided is a palindrome
    - otherwise return false

  Edge Cases:
    - when the string is a single character, return true.
    - prompt user for string if empty

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
