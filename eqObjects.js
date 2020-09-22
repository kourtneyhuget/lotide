const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };

// const eqArrays = (array1, array2) => {
//   let arrayLengthCheck = array1.length === array2.length;
//   if (arrayLengthCheck) {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// inputting two objects
// comparing if objects have the same keys and values
// output true if they match
// output false if they don't match
// eqObject Solution:

// Saad helped me with this problem

const eqObjects = function (object1, object2) {
  let keyArrObject1 = Object.keys(object1); // [c, d]
  let keyArrObject2 = Object.keys(object2); // [d ,c]
  let objKeyLengthCheck = keyArrObject1.length === keyArrObject2.length;
  if (!objKeyLengthCheck) {
    return false;
  }
  for (let key of keyArrObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, dc), true);
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true
// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false
// assertEqual(eqObjects(ab, abc), false);
