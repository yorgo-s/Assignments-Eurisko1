function findMissingNumber(arr: number[]): number {
  let n: number = arr.length + 1;
  let total: number = (n * (n + 1)) / 2;
  let sum: number = arr.reduce((a, b) => a + b);
  return total - sum;
}

console.log("Challenge 3");
console.log(findMissingNumber([1, 2, 3, 5, 6]));
