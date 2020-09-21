const assertArraysEqual = function (array1, array2) {
  eqArrays(array1, array2)
    ? console.log(`❤️ ❤️ ❤️ Assertion Passed:  ${array1} === ${array2}`)
    : console.log(`😭😭😭 Assertion Failed: ${array1} !== ${array2}`);
};
//compare two arrays for a perfect match
const eqArrays = (array1, array2) => {
  let arrayLengthCheck = array1.length === array2.length;
  if (arrayLengthCheck) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};
const without = (source, itemsToRemove) => {
  let newArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
