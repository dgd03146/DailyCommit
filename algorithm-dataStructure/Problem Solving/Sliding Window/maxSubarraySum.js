function maxSubarraySum(array, len) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < len) return null;
  for (let i = 0; i < len; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = len; i < array.length; i++) {
    tempSum = tempSum - array[i - len] + array[i];

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
