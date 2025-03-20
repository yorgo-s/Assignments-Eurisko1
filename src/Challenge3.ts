function findMissingNumber(arr: number[]): number {
  // The array length is N-1 (one missing), so total numbers should be N = arr.length + 1
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return total - sum;
}
console.log("Challenge 3");
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8])); // 7
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
