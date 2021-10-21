// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

let fibArr = [0,1];
let data = [];

function fib(n) {
    for (let i = 2; i <= n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
    }
}

function sumOddFibs(num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  fib(num);
  let total = 0;
  for (let i = 0; i < fibArr.length; i++) {
    if (fibArr[i] % 2 != 0 && fibArr[i] <= num) {
      total += fibArr[i]
    }
  }
  return total
}
