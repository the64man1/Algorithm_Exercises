/**
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let loopLen = Math.floor(len/2);
    for (let i = 0; i < loopLen; i++) {
        [s[i],s[len-i-1]] = [s[len-i-1],s[i]];
    }
};
