/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

*/
function isAnagram(str1, str2) {
	// Remove spaces and convert to lowercase for case-insensitive comparison
	const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
	const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
	// Check if the lengths are the same
	if (cleanStr1.length !== cleanStr2.length) {
	  return false;
	}
  
	// Convert strings to arrays, sort them, and compare
	const sortedStr1 = cleanStr1.split('').sort().join('');
	const sortedStr2 = cleanStr2.split('').sort().join('');
  
	// Check if the sorted strings are equal
	return sortedStr1 === sortedStr2;
  }

  /*function isAnagram(str1, str2) {
	const string1 = "School MASTER";
const string2 = "The ClassROOM";
const string1 = "rail safety";
const string2 = "fairy tales";

  let string1 = str1.toLowerCase().split("").sort().join("");
  let string2 = str2.toLowerCase().split("").sort().join("");
  return string1 === string2;
}
console.log(isAnagram(string1, string2));
*/
  
  module.exports = isAnagram;
  