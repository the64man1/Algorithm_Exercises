// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  let freqCounter = {};
  let answer = [];
  for (let item of arr1) {
    freqCounter[item] = (freqCounter[item] || 0) + 1;
  }
  for (let item of arr2) {
    freqCounter[item] = (freqCounter[item] || 0) + 1;
  }
  for (let key in freqCounter) {
    if (freqCounter[key] === 1) {
      if(!isNaN(key)) {
        let val = parseInt(key);
        answer.push(val)
      } else {
        answer.push(key)
      }
    }
  }
  return answer;
}
