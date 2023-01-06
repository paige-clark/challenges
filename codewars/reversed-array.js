/**
 * INPUT: a number
 * + split number in to an array
 *  + reverse the array
 * + loop through that array and turn each stringified number back
 *   in to a number
 * OUTPUT: the number as an array, in reversed order
 */

function digitize(n) {
  let arr = String(n).split("").reverse();
  let returnArr = [];
  for (let num of arr) {
    returnArr.push(Number(num));
  }
  return returnArr;
}

console.log(digitize(35231));
