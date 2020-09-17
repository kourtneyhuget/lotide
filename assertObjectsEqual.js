const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  let keyArrObject1 = Object.keys(object1); // [c, d]
  let keyArrObject2 = Object.keys(object2); // [d ,c]
  let objKeyLengthCheck = keyArrObject1.length === keyArrObject2.length;
  if (!objKeyLengthCheck) {
    return false;
  }
  for (let key of keyArrObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, dc);