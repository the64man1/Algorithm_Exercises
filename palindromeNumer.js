/**
 * Check if number is palindrome
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    
    let reverseX = x.toString().split('').reverse().join('');
    if (reverseX == x) {
        return true;
    } else {
        return false;
    }
};