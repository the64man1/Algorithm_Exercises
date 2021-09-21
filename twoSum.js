/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let found = false;
    let numsCopy = [...nums];
    let pointer = 0;
    let value = target - nums[pointer];
    while (!found) {
        numsCopy.splice(pointer, 1);
        if (numsCopy.includes(value)) {
            found = true;
        } else {
            pointer++;
        }
    }
    const secondIndex = nums.indexOf(value);
    return [pointer, secondIndex];
};
