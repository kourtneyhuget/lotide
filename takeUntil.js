// input an array and callback
// output returned array without elements from the beginning
// continues until returns a truthy value
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

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

const takeUntil = function(array, callback) {
  let results = [];
  for (i = 0; i < array.length; i ++) {
    if (callback(array[i]) === false) {
      results.push (array[i]);
    } else {
      return results
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1,2,5,7,2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);