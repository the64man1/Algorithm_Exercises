/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === "") return 0;
    let splitS = s.split('');
    let currentString = [splitS[0]];
    let longestString = 1;
    for (let i = 1; i < splitS.length; i++) {
        let char = currentString.indexOf(splitS[i]);
        
        if (char !== -1) {
            currentString.splice(0, char + 1)
        }
        
        currentString.push(splitS[i])
        
        longestString = Math.max(longestString, currentString.length)
    }
    return longestString;
};
