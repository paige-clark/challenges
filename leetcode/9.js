const isPalindrome = function (x) {
  // first just reject if the num is negative
  if (Math.sign(x) === -1) {
    return false;
  }
  // reverse the number
  let num = x;
  let reversed = 0;
  while (num > 0) {
    let lastNumber = num % 10;
    reversed = reversed * 10 + lastNumber;
    num = Math.floor(num / 10);
  }
  // check to see if the reversed num is a match
  if (reversed === x) {
    return true;
  } else {
    return false;
  }
};

console.log("TRUE", isPalindrome(121));
console.log("FALSE", isPalindrome(-121));

/**
 * - first check if the number is negative, if yes then return false
 * - next revese the number (initial thought was to do this by splitting
 *   the number in to an array but I wanted to find out how to do it without
 *   turning the number in to a string)
 * - compare the number and return boolean through conditional
 */
