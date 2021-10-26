/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carriedOne = false;
    if (digits.length === 1 && digits[0] === 9) return [1,0]
    for (let i = digits.length - 1; i >= 0; i--) {
        if (i === 0 && carriedOne && digits[i] === 9) {
            digits[i] = 0;
            digits.unshift(1);
            return digits
        } else if (carriedOne && digits[i] < 9) {
            digits[i]++;
            return digits;
        } else if (digits[i] === 9) {
            digits[i] = 0;
            carriedOne = true;
        } else {
            digits[i]++;
            return digits
        }
    }
};
