/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let tempSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        tempSum = Math.max(tempSum + nums[i], nums[i]);
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
};
