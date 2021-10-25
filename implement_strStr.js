/**
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack, or 0 if needle is empty string.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.trim() === "") return 0
    for (let i = 0; i < haystack.length; i++) {
        let tail = haystack.slice(i);
        if (tail.startsWith(needle)) {
            return i
        }
    }
    return -1
};
