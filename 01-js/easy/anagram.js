/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const sortedStr1 = sortString(str1);
  const sortedStr2 = sortString(str2);
  console.log(sortedStr1, sortedStr2);
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i].toLowerCase() !== sortedStr2[i].toLowerCase())
      return false;
  }
  return true;
}

function sortString(str) {
  const n = str.length;
  let arr = str.split("");
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Swap if the element found is greater than the next element
      if (
        arr[j].toLowerCase().charCodeAt() >
        arr[j + 1].toLowerCase().charCodeAt()
      ) {
        // Swap arr[j] and arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

module.exports = isAnagram;
