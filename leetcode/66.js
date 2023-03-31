const plusOne = function (digits) {
  const lastDigit = digits[digits.length - 1];
  if (lastDigit !== 9) {
    // just increment the last digit if it's not 9
    digits[digits.length - 1] += 1;
    return digits;
  } else {
    // start looping backwards
    for (let i = digits.length - 1; i >= 0; i--) {
      // special cases for the first num in the array
      if (i === 0 && digits[i] + 1 > 9) {
        digits[i] = 0;
        digits.unshift(1);
        return digits;
      } else if (i === 0 && digits[i] + 1 < 9) {
        digits[i] += 1;
        return digits;
      }
      // turn the current number in to 0
      digits[i] = 0;
      if (digits[i - 1] + 1 < 10) {
        // if the prev num is less than 9 then we can stop here
        digits[i - 1] += 1;
        return digits;
      }
    }
  }
};

console.log(plusOne([1, 9, 9]));
console.log(plusOne([8, 9, 9]));

/**
 * INPUT: an array that represents a number
 * - the easiest solution would be to just join the array in to a string, turn
 *   the string in to a number, increment the number, then turn in back in to
 *   a string, split it, and return that but it feels like there's a more
 *   interesting solution
 * - what if we just added one to each number going from right to left?
 * OUTPUT: the array with the number incremented by one
 */
