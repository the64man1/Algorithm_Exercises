//Check if the digits of two different numbers occur at the same frequency
//ex. (128, 182) = true; (1234, 4321) = true; (127, 137) = false;

const sameFrequency = (num1, num2) => {
	const stringNum1 = String(num1);
  const stringNum2 = String(num2);
  
  if (stringNum1.length !== stringNum2.length) {
  	return false;
  }
  
	let freqCounter1 = {};
  let freqCounter2 = {};
  
  for (let digit of stringNum1) {
    freqCounter1[digit] = (freqCounter1[digit] || 0) + 1;
  }
  
  for (let digit of stringNum2) {
    freqCounter2[digit] = (freqCounter2[digit] || 0) + 1;
  }

  for (let key in freqCounter1) {
  	if (freqCounter1[key] !== freqCounter2[key]) {
    	return false
    }
  }
  
  return true
}
