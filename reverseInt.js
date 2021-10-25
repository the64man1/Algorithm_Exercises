/**
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let answer = [];
    let numStrArr = String(Math.abs(x)).split('');
    numStrArr.reverse();
    if (numStrArr[0] == 0) {
        let leadingZero = true;
        for (let i = 0; i < numStrArr.length; i++) {
            if (numStrArr[i] == 0 && leadingZero) {
                continue;
            } else {
                answer.push(numStrArr[i]);
                leadingZero = false;
            }
        }
    } else {
        for (let i = 0; i < numStrArr.length; i++) {
            answer.push(numStrArr[i])
        }
    }
    let answerNum = Number(answer.join(''));
    if (x < 0) answerNum *= -1;
    if (answerNum <= -(2**31) || answerNum >= 2**31 - 1) return 0;
    return answerNum
};
