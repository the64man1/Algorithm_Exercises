// Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length
// of the number passed to the function.

// Utilizes the sliding window pattern as discussed in the JavaScript Algorithms and Data Structures Masterclass
// by Colt Steele on Udemy.

function maxSubarraySum(arr, sub){
  let maxSum = 0;
  let tempSum = 0;
  if (sub > arr.length) return null;
  for (let i = 0; i < sub; i++) {
      maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = sub; i < arr.length; i++) {
      tempSum = tempSum - arr[i-sub] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
