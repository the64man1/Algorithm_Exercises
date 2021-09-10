/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 */
 var numJewelsInStones = function(jewels, stones) {
    const jewelArr = jewels.split('');
    const stonesArr = stones.split('');
    let counter = 0;
    stonesArr.forEach(stone => {
        if (jewelArr.includes(stone)) {
            counter++;
        }
    })
    return counter;
};