const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["Hello"], ["Hello"]), true);
assertEqual(eqArrays(["No thank you"], ["Yes Please"]), false);
