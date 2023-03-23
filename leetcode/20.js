// this solution only works in pairs... which of course they had to throw a curvebal lol
// const isValid = function (s) {
//   if (s.length % 2 !== 0) {
//     return false;
//   }
//   for (let i = 0; i < s.length; i += 2) {
//     let firstChar = s[i];
//     let secondChar = s[i + 1];
//     switch (firstChar) {
//       case "(":
//         if (secondChar !== ")") {
//           return false;
//         } else {
//           break;
//         }
//       case "{":
//         if (secondChar !== "}") {
//           return false;
//         } else {
//           break;
//         }
//       case "[":
//         if (secondChar !== "]") {
//           return false;
//         } else {
//           break;
//         }
//     }
//   }
//   return true;
// };
// refactored solution
const isValid = function (s) {
  // if the string can't be modullated by two something is wrong
  if (s.length % 2 !== 0) {
    return false;
  }
  // storage for closing brackets expected to be found
  const expectedBrackets = [];
  // looping through all the letters in the string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    switch (char) {
      case "(":
        expectedBrackets.push(")");
        break;
      case "{":
        expectedBrackets.push("}");
        break;
      case "[":
        expectedBrackets.push("]");
        break;
      // if a closing bracket is found check to see if its pair is last in the
      // array of expected characters
      default:
        // pop both mutates an array and gives you the removed value
        if (expectedBrackets.pop() !== char) {
          return false;
        }
    }
  }
  // if the expected bracks is empty return true
  return !expectedBrackets.length;
};

console.log("TRUE", isValid("()[]{}"));
console.log("FALSE", isValid("(}[]{}"));
console.log("TRUE", isValid("{[]}"));
console.log("FALSE", isValid("{[(]}"));
console.log("FALSE", isValid("}[(]{"));

/**
 * INPUT: a string that contains parentheses
 *   - first, if the string length modullated by two is not 0, return false
 *     - loop through the string, iterating by two each time
 *     - compare the character at the current index with the one in the next pos
 *       maybe use a switch case here? if char a is this, switch case kinda thing
 *       - return false if you run in to a bad case
 *   - at the end return true if you get there
 * OUTPUT: true or false depending on if they are valid
 * q: do they always come in pairs? test data seems to indicate this...
 *    but the solution will be versy differnt otherwise
 *    ex: is ([]{}) valid?
 *        > turns out it is haha
 *
 * REFACTOR NOTES:
 * - current switch case solution won't work but I can probably still use a switch
 *   statement somehow..
 * - iterate through each character and push the pair you expect to find to an array
 *   the goal is to build an array like [),],}] then eliminate from the outside in
 */
