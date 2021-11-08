/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1;
    let total = 1;
    let prev = 1;
    for (let i = 1; i < n; i++) {
        total += prev;
        prev = total - prev;
    }
    return total;
};
