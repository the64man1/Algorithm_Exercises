/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i1 = 0;
    while (i1 < (n+m)) {
        if (nums2[0] < nums1[i1]) {
            nums1.splice(i1,0,nums2[0]);
            nums1.pop();
            nums2.shift();
        } else {
            i1++;
        }
    }
    if (nums2.length > 0) {
        nums1.splice(nums1.length - nums2.length, nums2.length);
        for (let i = 0; i < nums2.length; i++) {
            nums1.push(nums2[i]);
        }
    }
};
