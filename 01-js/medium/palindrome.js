/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length === 0) return true;
  if (!str.length) return false;
  const specialCharacters = ["?", "!", ",", "."];
  let filterString = str
    .split("")
    .filter((v) => !specialCharacters.includes(v))
    .join(" ")
    .replaceAll(" ", "")
    .toLowerCase();
  for (let i = 0; i < filterString.length; i++) {
    if (filterString[i] !== filterString[filterString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
