/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
 * You can use each character in text at most once. Return the maximum number of instances that can be formed.
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let freqCounter = { b: 0, a: 0, l: 0, o: 0, n: 0};
    let splitText = text.split('');
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === 'b' || 
            splitText[i] === 'a' ||
            splitText[i] === 'l' ||
            splitText[i] === 'o' ||
            splitText[i] === 'n') {
            freqCounter[splitText[i]] += 1;
        }
    }
    freqCounter['l'] = Math.floor(freqCounter['l']/2);
    freqCounter['o'] = Math.floor(freqCounter['o']/2);
    let arr = Object.values(freqCounter);
    return Math.min(...arr);
};
