const assertArraysEqual = function(arr1,arr2) {
  eqArrays(arr1,arr2) ? console.log(`✅ ✅ ✅ : WOOHOO! These arrays ARE equal`) :
  console.log(`❌ ❌ ❌: OH NO! These arrays are NOT equal`);
}
