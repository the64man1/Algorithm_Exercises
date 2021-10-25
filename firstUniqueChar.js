/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let splitStr = s.split('');
    let freqCounter = {};
    for (let char of splitStr) {
        freqCounter[char] = (freqCounter[char] || 0) + 1
    }
    let firstIndex = -1;
    for (let key in freqCounter) {
        if (freqCounter[key] === 1) {
            firstIndex = key
            break;
        }
    }
    return splitStr.indexOf(firstIndex)
};
