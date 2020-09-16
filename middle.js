const eqArrays = (array1, array2) => {
  let arrayLengthCheck = array1.length === array2.length;
  if (arrayLengthCheck) {
    for (let i = 0; i < array1.length; i++) {
      if (array1 [i] !== array2 [i]) {
        return false;
      }
    }
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const middle = function(array) {
  let newArray = [];
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    newArray.push(array[array.length / 2 - 1 ]);
    newArray.push(array[array.length / 2 ]);
  } else if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);
  }
  return newArray;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
  