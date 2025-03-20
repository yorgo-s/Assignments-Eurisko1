function findMissingNumber(arr: number[]): number {
  // Find the minimum and maximum numbers in the array
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // Calculate the expected sum for all numbers in the consecutive range [min, max]
  const expectedCount = max - min + 1;
  const expectedSum = ((min + max) * expectedCount) / 2;

  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Example usage:
console.log("Challenge 3");
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([4, 5, 6, 8, 9])); // 7
console.log(findMissingNumber([1, 2, 3, 5, 6])); //4
console.log(findMissingNumber([0, 1, 2, 3, 5, 6])); //4
console.log(findMissingNumber([6, 7, 8, 10, 11])); //9
