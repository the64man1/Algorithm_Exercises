/*
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * @param {number[]} nums
 * @return {number}
*/

var singleNumber = function(nums) {
    let freqCounter = {};
    
    for (let digit of nums) {
        freqCounter[digit] = (freqCounter[digit] || 0) + 1;
    }
    
    for (let key in freqCounter) {
        if (freqCounter[key] === 1) return key;
    }
};
