const lengthOfLastWord = function (s) {
  if (s.length === 0) {
    return 0;
  }
  if (s[s.length - 1] === " " && s.length === 1) {
    return 0;
  }
  const workingStr = s.trim();
  let counter = 0;
  for (let i = workingStr.length; i > 0; i--) {
    if (workingStr[i - 1] !== " ") {
      counter++;
    } else if (workingStr[i - 1] === " " || workingStr[i - 1] === undefined) {
      return counter;
    }
  }
  return counter;
};

console.log(lengthOfLastWord("a"));

/**
 * INPUT:  a string
 * - trim the whitespace off the string
 * - loop backwards through string
 *   - if you find a space, stop counting
 *   - otherwise count how many non spaces you find
 * - return that number
 * OUTPUT: the length of the last word in a string
 */
