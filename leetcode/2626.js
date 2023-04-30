var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }
  let accumVal = init;
  for (let i = 0; i < nums.length; i++) {
    accumVal = fn(accumVal, nums[i]);
  }
  return accumVal;
};

const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

console.log(reduce(nums, fn, init));

/**
 * INPUT: 1. an array of numbers
 *        2. a reducer function
 *        3. an initial value
 * - guard conditional that returns the init value if the array length is 0
 * - initialize the value to add to (init), this is the accum value
 * - loop through each number in the array
 *   - call the function with the accum value and the current value
 *   - set the accum value to the result of this
 * - return the accum value
 * OUTPUT: if the array is greater than 0 in length, return the reduced value
 */
