"use strict";
function findMissingNumber(arr) {
    let n = arr.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = arr.reduce((a, b) => a + b);
    return total - sum;
}
console.log("Challenge 3");
console.log(findMissingNumber([1, 2, 3, 5, 6]));
