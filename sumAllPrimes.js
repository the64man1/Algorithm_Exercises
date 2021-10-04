// write sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  //loop ints up to num
    // check if divisible by 2 i%2 = 0
    // if not, loop thru array of primes, check if i % prime[j] = 0
  if (num < 2) return 0;
  if (num === 2) return 2;
  let primes = [2];
  for (let i = 3; i <= num; i++) {
    if (i % 2 === 0) {
      continue;
    } else {
      let isPrime = true;
      for (let j = 0; j < primes.length; j++) {
        if (i % primes[j] === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(i)
      }
    }
  }
  const reducer = (prevVal, currentVal) => prevVal + currentVal;
  return primes.reduce(reducer);
}
