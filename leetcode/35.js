const searchInsertInitial = function (nums, target) {
  if (!nums.length || nums[0] > target) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target && nums[i + 1] > target) {
      return i + 1;
    }
  }
  return nums.length;
};

// this problem can also be solved with binary searching (think phonebook)

const searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length;

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
};

/**
 * INPUT: an array of nums and a target number
 * - loop through the array of nums
 *   - as you loop check to see if the number is found, if so return the index
 *   - else check to see if the previous number is smaller than and the
 *     next number is larger than the target number if so return the current
 *     index + 1
 * - if the loop finishes, return the array length + 1
 * OUTPUT: the index of where the number is found or the nums length
 *         if not found
 */
