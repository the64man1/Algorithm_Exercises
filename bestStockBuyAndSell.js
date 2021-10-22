/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
 * Find and return the maximum profit you can achieve.
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;
    let lastLowest = 0;
    let profit = 0;
    let boughtStock = false;
    for (let i = 0; i < prices.length; i++) {
        if ((prices[i] <= prices[i-1] || i === 0) && prices[i] < prices[i+1] && !boughtStock) {
            lastLowest = prices[i];
            boughtStock = true;
            console.log(`Bought at index ${i}`)
        }
        if ((i === (prices.length - 1) || prices[i] > prices[i+1]) && boughtStock) {
            let sale = prices[i] - lastLowest;
            lastLowest = 0;
            boughtStock = false;
            profit += sale;
            console.log(`Sold at index ${i}`)
        }
    }
    return profit
};
