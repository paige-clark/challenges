/** Sentene Smash
 * INPUT: an array of words
 * - Just use join and trim this challenge is too easy for me haha
 * OUTPUT: the words combined in to a sentence
 */

function smash(words) {
  return words.join(" ").trim();
}

const sentenceArr = [" ", "hello", "world", "this", "is", "great"];

console.log(smash(sentenceArr));
