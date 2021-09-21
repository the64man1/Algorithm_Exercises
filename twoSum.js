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
    let pointer = 0;
    while (!found) {
        let tail = nums.slice(pointer + 1)
        let value = target - nums[pointer];
        if (tail.includes(value)) {
            found = true;
            break;
        } else {
            pointer++;
        }
    }
    let value = target - nums[pointer];
    nums[pointer] = null;
    let secondIndex = nums.indexOf(value);
    return [pointer, secondIndex];
};
