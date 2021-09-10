/**
 * Convert Roman numeral to integer
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let splitS = s.split('')
    let key = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let total = 0;
    for (let i = 0; i < splitS.length; i++) {
        if (splitS[i] == "I" && splitS[i + 1] == "V") {
            total += 4;
            i++;
        } else if (splitS[i] == "I" && splitS[i + 1] == "X") {
            total += 9;
            i++;
        } else if (splitS[i] == "X" && splitS[i + 1] == "L") {
            total += 40;
            i++;
        } else if (splitS[i] == "X" && splitS[i + 1] == "C") {
            total += 90;
            i++;
        } else if (splitS[i] == "C" && splitS[i + 1] == "D") {
            total += 400;
            i++;
        } else if (splitS[i] == "C" && splitS[i + 1] == "M") {
            total += 900;
            i++;
        } else {
            total += key[splitS[i]];
        }
    }
    return total
};