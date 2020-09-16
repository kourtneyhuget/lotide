const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️ ❤️ ❤️ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  let arrayLengthCheck = array1.length === array2.length;
  if (arrayLengthCheck){
    for (let i = 0; i < array1.length; i++){
      if (array1 [i] !== array2 [i]){
        return false;
      }
    }
  } 
  return true;
}


assertEqual(eqArrays([1,2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["Hello"], ["Hello"]), true);
assertEqual(eqArrays(["No thank you"], ["Yes Please"]), false);