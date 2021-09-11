/**
 * Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
 * Return any array that satisfies this condition.
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    return nums.sort((num) => {
        if (num % 2 == 0) {
            return -1
        } else {
            return 1
        }
    })
};
