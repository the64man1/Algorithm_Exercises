/**
 * Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    strs.sort(function(a,b){return a.length - b.length});
    maxLength = strs[0].length;
    strs.filter(function(str) {return str.length === maxLength})
    for (let i = 0; i < strs.length; i++) {
        let head = strs[0].split('');
        if(!strs[i].startsWith(head[0])) {
            return "";
        }
    }
    for (let i = 0; i < strs.length; i++) {
        let head = strs[0].slice(0,i+1);
        if (!strs[i].startsWith(head)) {
            return strs[i].slice(0,i);
        }
    }
    return strs[0];
};
