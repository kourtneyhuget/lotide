const eqArrays = require("./eqArrays");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");

const eqObjects = function (object1, object2) {
  let arrObject1 = Object.keys(object1);
  let arrObject2 = Object.keys(object2);
  let objKeyLengthCheck = arrObject1.length === arrObject2.length;
  if (!objKeyLengthCheck) {
    return false;
  }
  for (let key of arrObject1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
