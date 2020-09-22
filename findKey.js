const assertEqual = require("./assertEqual");
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };

const findKey = function (object, callback) {
  for (let key in object) {
    //want to loop through object until we find the right property
    const wantedKey = callback(object[key]);
    if (wantedKey) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
// const result = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// );

// console.log(result);

// assertEqual(result, "noma");
// assertEqual(result, "elBulli");
