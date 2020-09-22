const assertEqual = require("./assertEqual");
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };

const countLetters = function (string) {
  let results = {};
  for (letter of string) {
    if (letter != " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;
