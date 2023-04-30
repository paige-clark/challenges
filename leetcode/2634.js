var filter = function (arr, fn) {
  if (arr.length === 0) {
    return [];
  }
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

console.log(filter(arr, fn));

/**
 * INPUT: 1. an array
 *        2. a filtering function that should be called like fn(arr[i], i)
 * - establish a new, empty arra
 * - iterate through the input array
 *   - call the function with the number and the current index
 *     - if the function returns true, push that number to the new array
 * - return the new array
 * OUTPUT: a new array that has been modified with the filtering function
 */
