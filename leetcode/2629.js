var compose = function (functions) {
  return function (x) {
    let returnVal = x;
    if (functions.length > 0) {
      for (let i = functions.length - 1; i >= 0; i--) {
        let currFunc = functions[i];
        let newVal = currFunc(returnVal);
        returnVal = newVal;
      }
      return returnVal;
    } else {
      return returnVal;
    }
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9

/**
 * INPUT: 1. an array of functions
 *        2. a value that the array is called with
 * OUTPUT: the value run through the series of functions from left to right
 */
