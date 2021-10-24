/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection. 
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let freqCounter1 = {};
    let freqCounter2 = {};
    
    for (let num of nums1) {
        freqCounter1[num] = ((freqCounter1[num] || 0) + 1);
    }
    
    for (let num of nums2) {
        freqCounter2[num] = ((freqCounter2[num] || 0) + 1);
    }
    
    let answer = [];
    
    for (let key in freqCounter1) {
        if (freqCounter2[key]) {
            let val1 = freqCounter1[key];
            let val2 = freqCounter2[key];
            let repeats = Math.min(val1, val2);
            for (let i = 0; i < repeats; i++) {
                answer.push(parseInt(key));
            }
        }
    }
    
    return answer;
};
