/**
 * Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        let tail = nums.slice(i);
        for (let j = 1; j < tail.length; j++) {
            if (Math.abs(nums[i] - tail[j]) == k) {
                counter++;
            }
        }
    }
    return counter
};
