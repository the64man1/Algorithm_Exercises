/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort((a,b) => a.length - b.length);
    let shortestStr = strs[0].split('');
    let longestSubStr = "";
    for (let i = 1; i < shortestStr.length + 1; i++) {
        let prefix = shortestStr.slice(0,i).join('');
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(prefix)) {
                prefix = prefix.split('');
                prefix.pop();
                prefix = prefix.join('');
                return prefix;
            }
        }
    }
    return shortestStr.join('');
};
