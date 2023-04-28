// const createCounter = function (n) {
//   let counter = -1;
//   return function () {
//     counter++;
//     return counter + n;
//   };
// };

// const counter = createCounter(10);
// console.log(counter()); // 10
// console.log(counter()); // 11
// console.log(counter()); // 12

const createCounter = function (n) {
  let emptyStr = "";
  let counter = -1;
  return function () {
    counter++;
    if (counter !== 0) {
      emptyStr += n;
      return emptyStr + n;
    } else {
      return n;
    }
  };
};

const counter = createCounter("egg");
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
