/*
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let answer = [];
    let isNegative = false;
    let signed = false;
    for (let char of s) {
        if (char === " " && !signed) {
            continue;
        }
        if (char === "-" && !signed) {
            isNegative = true;
            signed = true;
            continue;
        }
        if (char === "+" && !signed) {
            isPositive = true;
            signed = true;
            continue;
        }
        if ((char.charCodeAt() > 47) && (char.charCodeAt() < 58)) {
            answer.push(char);
            signed = true;
        } else {
            break;
        }
    }
    if (answer.length === 0) return 0
    answer = answer.join('');
    if (isNegative) answer *= -1;
    if (answer < -2147483648) return -2147483648;
    if (answer > 2**31 - 1) return 2147483647;
    return answer;
};
