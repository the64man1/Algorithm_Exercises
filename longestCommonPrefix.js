/**
 * Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0];
    const sortStrs = strs.sort((a,b) => a.length - b.length)
    if (sortStrs[0] === "") return "";
    const firstStrSplit = sortStrs[0].split('');
    let arr = [];
    for (let i = 1; i < firstStrSplit.length + 1; i++) {
        let head = firstStrSplit.slice(0, i).join('');
        arr.push(head);
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j].startsWith(head)) {
                arr.pop();
                return arr.length === 0 ? "" : arr.pop();
            }
        }
    }
    return sortStrs[0];
};
