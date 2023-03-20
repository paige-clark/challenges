/**
 * https://bigfrontend.dev/problem/implement-curry
 * Q: Why is curring useful?
 * A: it seems to allow you to use a sequence of functions on eachother
 *    without having to make a bunch of calls.
 *
 * I ended up watching a video on how to solve this, they used two methods
 * that I'm unfamiliar with.
 *
 * Method: apply() >
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 * 
 *  The apply() method calls the specified function with a given this value, and
 *  arguments provided as an array (or an array-like object).
 * 
 * Method: bind() >
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 * 
 *  The bind() method creates a new function that, when called, has its this
 *  keyword set to the provided value, with a given sequence of arguments
 *  preceding any provided when the new function is called.
 * 
 * I need to return to this eventually and see if I get it better.
 */

function womboCombo(a, b, c) {
  return `${a}, ${b}, ${c}.`;
}

// function curry(a) {
//   return (b) => {
//     return (c) => {
//       return womboCombo(a, b, c);
//     };
//   };
// }

// this gives the solution but I'll be honest I don't fully understand it
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}

console.log(curry(womboCombo)(1)(2)(3));
console.log(curry(womboCombo)(1, 2, 3));
console.log(curry(womboCombo)(1)(2, 3));
