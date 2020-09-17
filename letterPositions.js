const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) ? console.log(`✅✅✅ Assertion Passed:  ${array1} === ${array2}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }

const letterPositions = function(sentence) {
  const results = {};
  for (letter of sentence) {
    if (letter != " ") {
      results[letter] = findIndex(sentence,letter)
    }
  }
  return results;
};

const findIndex = function(string, letter) {
  const indexResult = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      indexResult.push(i);
    }
  } return indexResult;
  };

console.log(letterPositions("lighthouse in the house"));


