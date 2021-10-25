/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = [];
    let reverseArr = [];
    for (let char of s) {
        if (((char.charCodeAt() > 96) && (char.charCodeAt() < 123)) || ((char.charCodeAt() > 64) && (char.charCodeAt() < 91))) {
            arr.push(char.toLowerCase());
            reverseArr.unshift(char.toLowerCase())
        }
        if ((char.charCodeAt() > 47) && (char.charCodeAt() < 58)) {
            arr.push(char);
            reverseArr.unshift(char);
        }
    }
    let forwardStr = arr.join('');
    let backwardStr = reverseArr.join('');
    if (forwardStr === backwardStr) return true
    return false
};
