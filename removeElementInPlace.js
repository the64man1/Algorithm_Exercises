// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

var removeElement = function(nums, val) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            counter++;
            nums[i] = Infinity;
        }
    }
    nums.sort((a,b) => a - b)
    const tail = nums.length - counter;
    return nums.splice(tail)
};
