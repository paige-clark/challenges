// this works but it's very slow because of splice
// const removeDuplicates = function (nums) {
//   const seenThemNums = {};
//   for (let i = 0; i < nums.length; i++) {
//     let currentNum = nums[i];
//     if (!seenThemNums[currentNum]) {
//       seenThemNums[currentNum] = true;
//     } else {
//       nums.splice(i, 1);
//       i -= 1;
//     }
//   }
//   console.log(nums);
//   return nums.length;
// };

// this solution doesn't actually remove the duplicates, it just reconfigs the
//  start to only have the numbers needed then tells the program where to count to
const removeDuplicates = function (nums) {
  // will become a reference of the most recent unique number
  let last = undefined;
  // the count of unique numbers
  let count = 0;
  // loop through all the numbers
  for (let i = 0; i < nums.length; i++) {
    // if the num at the current index is different to the previous number
    if (nums[i] !== last) {
      // the number at the index of count becomes the new number
      nums[count] = nums[i];
      // the new unique number is stored
      last = nums[i];
      // the count is increased to target the next slot
      count++;
    }
  }
  return count;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 12, -2]));

/**
 * INPUT: an array of numbers
 * - loop through the array
 *   - create an object with keys as you do so
 *     - if the object doesn't have that key, create it
 *     - if it does, replace the number in the array with "_"
 * - sort the array and return it
 * OUTPUT: the modified array I think? instructions are unclear
 */
