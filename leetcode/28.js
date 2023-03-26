const strStr = function (haystack, needle) {
  const subStrLen = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    // if the substring is possible check for a match
    if (haystack.substring(i, i + subStrLen).length === subStrLen) {
      if (haystack.substring(i, i + subStrLen) === needle) {
        return i;
      }
    } else {
      // if it isn't possible return
      return -1;
    }
  }
  // if you get all the way through (like if a character is length 1), return
  return -1;
};
console.log(strStr("sadbutsad", "sad"));

/**
 * - loop through the haystack
 *   - using the substring method use the current index as the start of the
 *     comparing string, then the index plus the length of the needle length as
 *     the end. See if the substring matches the needle.
 *     - if the word is found, return the current index
 *     - else return -1
 * - return -1 at the end for edge cases like one letter words
 */
