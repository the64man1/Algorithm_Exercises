// Checks if two strings are anagrams

const validAnagram = (str1, str2) => {
	if(str1.length !== str2.length) {
  	return console.log(false)
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  for (let char of str1) {
  	freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
  	freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }
  for (let key in freqCounter1) {
  	if(!(key in freqCounter2)) {
    	return console.log(false);
    };
    if(freqCounter1[key] !== freqCounter2[key]) {
    	return console.log(false);
    }
  };
  return console.log(true);
}
