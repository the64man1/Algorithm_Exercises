//Write function which accepts variable number of arguments and checks whether there are any duplicates among the arguments passed in

function areThereDuplicates(...args) {
  if (!args) return false;
  let freqCounter = {};
  for (let char of args) {
      freqCounter[char] = (freqCounter[char] || 0) + 1;
  }
  for (let key in freqCounter) {
      if (freqCounter[key] > 1) {
          return true;
      }
  }
  return false;
}
