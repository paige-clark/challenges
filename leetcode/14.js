// const longestCommonPrefix = function (strs) {
//   if (strs.length === 0 || strs[0] === "") {
//     return "";
//   }
//   if (strs.length === 1) {
//     return strs[0];
//   }
//   let matchBool = false;
//   const firstString = strs[0].split("");
//   console.log("FIRST", firstString);
//   let returnStr = [];
//   let perfectIdx = 0;
//   for (let i = 1; i < strs.length; i++) {
//     if (strs[i] === strs[perfectIdx]) {
//       matchBool = true;
//       console.log("perfect match");
//       continue
//     }
//     matchBool = false;
//     perfectIdx = i;
//     let currentStr = strs[i].split("");
//     console.log("CURRENT", currentStr);
//     for (let j = 0; j < currentStr.length; j++) {
//       if (currentStr[j] !== firstString[j]) {
//         if (returnStr.length === 0) {
//           return "";
//         } else {
//           return returnStr.slice(-j).join("");
//         }
//       } else {
//         if (j > returnStr.length) {
//           continue
//         } else if (currentStr[j] === returnStr[j]) {
//           continue
//         } else {
//           returnStr.push(currentStr[j]);
//         }
//       }
//     }
//   }
//   console.log("GETTING TO THE END");
//   if (matchBool === true) {
//     return firstString.join("");
//   }
//   console.log("RETURN", returnStr);
//   return returnStr.join("");
// };

const longestCommonPrefix = function (strs) {
  // guarding cases
  if (strs.length === 0 || strs[0] === "") {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  // split the first string in to an array
  const firstString = strs[0].split("");
  console.log("FIRST WORD", firstString);

  // join and return this array at the end
  let matchStrArr = [];

  for (let i = 1; i < strs.length; i++) {
    let currentStr = strs[i].split("");
    console.log("COMPARING WORD", currentStr);
    //
    if (i === 1) {
      for (let j = 0; j < firstString.length; j++) {
        if (currentStr[j] === firstString[j]) {
          matchStrArr.push(currentStr[j]);
        } else {
          break;
        }
      }
    }
    //
    if (i > 1) {
      for (let k = 0; k < matchStrArr.length; k++) {
        if (currentStr[k] === matchStrArr[k]) {
          continue;
        } else if (currentStr[k] !== matchStrArr[k]) {
          console.log("UNMATCHING LETTER", currentStr[k]);
          let endSlice = matchStrArr.length;
          console.log(k);
          console.log("----", matchStrArr.slice(0, k));
          matchStrArr = matchStrArr.slice(0, k);
          break;
        }
      }
    }
    console.log("END OF LOOP", matchStrArr);
  }
  return matchStrArr.join("");
};
console.log(longestCommonPrefix(["abab","aba","abc"]));
// console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));
// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix(["dog","racecar","car"]));

/**
 * - establish a match array
 * - start by splitting the word at index 0 int o a an array of letters
 * - then do a for loop starting at index 1 of the array of strings
 * - loop through the array of strings
 *   - split the current word in to an array of letters
 *   - if this is the first comparison round, loop through word and compare against the first word
 *     - if the letters don't match, return ""
 *     - if the letters do match, push the matching letters to a match array
 *   - if it isn't (use index num), compare against the matching letters array
 *     - if the first letters don't match, return ""
 *     - if the letters match only check for the length of the matched letter array
 *     - if the second + letter doesn't match, trim it from the matched letter
 * - at the end return the matching letters as a string
 */
