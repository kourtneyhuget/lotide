const assertArraysEqual = function(arr1,arr2){
  const result = eqArrays(arr1,arr2)
    if (!result){
        console.log(`❌ ❌ ❌: OH NO! These arrays are NOT equal`);
    }
    else {
        console.log(`✅ ✅ ✅ : WOOHOO! These arrays ARE equal`);
    }
};
