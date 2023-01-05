/**
 * INPUT: An array of numbers and strings
 * + use the filter method to remove the strings from the array
 *   + return that array
 * OUTPUT: The same array with the strings removed 
 */

function filter_list(l) {
  return l.filter((element) => {
    if (typeof element !== "string") {
      return true;
    }
  })
}


console.log(filter_list([1,2,'a','b']));