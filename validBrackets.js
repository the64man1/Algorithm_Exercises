/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
     Open brackets must be closed by the same type of brackets.
     Open brackets must be closed in the correct order.
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let opened = [];
    let splitS = s.split('');
    for (let i = 0; i < splitS.length; i++) {
        if (splitS[i] === "(" ||
            splitS[i] === "{" ||
            splitS[i] === "[") {
            opened.unshift(splitS[i]);
        }
        if (splitS[i] === ")") {
            if (opened[0] !== "(") {
                return false;
            }
            opened.shift();
        }
        if (splitS[i] === "}") {
            if (opened[0] !== "{") {
                return false;
            }
            opened.shift();
        }
        if (splitS[i] === "]") {
            if (opened[0] !== "[") {
                return false;
            }
            opened.shift();
        }
    }
    if (opened.length > 0) return false;
    return true;
};
