const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  let arrayLengthCheck = arr1.length === arr2.length;
  if (arrayLengthCheck){
    for (let i = 0; i < arr1.length; i++){
      if (arr1 [i] !== arr2 [i]){
        return false;
      }
    }
  } 
  return true;
}


assertEqual(eqArrays([1,2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["Hello"], ["Hello"]), true);
assertEqual(eqArrays(["No thank you"], ["Yes Please"]), false);