Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};

const arr = [1, 2, 6];
console.log(arr.last()); // 3

/**
 * INPUT: an array that we're calling a custom method on
 * - if the array length is greater than 0
 *   - return the element in the last index of the array
 * - else if the array length is 0
 *   - return -1
 * OUTPUT: the last element in the array if the array length is greater than 0
 *         otherwise output -1
 *
 *
 */
