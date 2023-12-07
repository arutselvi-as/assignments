/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // removing non-alphanumeric characters nd convert to lowercases
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // to check if the cleand string equal to its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = isPalindrome;
