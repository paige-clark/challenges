const containsDuplicate = function (nums) {
  const collectorObj = {};
  for (let num of nums) {
    if (collectorObj[num]) {
      return true;
    } else {
      collectorObj[num] = true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

/**
 * INPUT: an array
 * - loop through the array
 *  - for each number in the array, if the key doesn't exist in an object add it, otherwise return false
 * OUTPUT: true if there are duplicates in the array, false otherwise
 */
