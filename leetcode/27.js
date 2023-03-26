const removeElement = function (nums, val) {
  // sort the numbers
  nums.sort((a, b) => {
    return a - b;
  });

  // count how many nums aren't the bad val
  let count = 0;

  // get the start of the splice of bad numbers and how many bad
  // numbers there are.
  const spliceEdges = [];

  // loop through all the numbers
  for (let i = 0; i < nums.length; i++) {
    // if the number isn't the removed val increment
    if (nums[i] !== val) {
      count++;
    } else {
      // otherwise pus the index to splice out
      spliceEdges.push(i);
    }
  }

  // if the val is the last number no point in splicing
  if (nums[nums.length] === val) {
    return count;
  } else {
    nums.splice(spliceEdges[0], spliceEdges.length);
  }
  // otherwise wait for splice for the count
  return count;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/**
 * INPUT: an array and a value
 *
 * OUTPUT: the length of the array when the value isn't included
 */
