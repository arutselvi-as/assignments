/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // convrt the string to lowrcases to handle case-insensitivity
  const lowerStr = str.toLowerCase();

  // to define a set of vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  // using Array.filter to count the vowels in the string
  const vowelCount = Array.from(lowerStr).filter((char) => vowels.has(char)).length;

  return vowelCount;
}

module.exports = countVowels;
