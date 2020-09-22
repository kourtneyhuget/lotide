const assertEqual = require("./assertEqual");
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };
// input
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };
// input best tv shows, the name of the show and the genre
//
// output if the name of the show falls under best tv shows and if so return the genre
// if it does not fall under best tv shows return undefined

const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
