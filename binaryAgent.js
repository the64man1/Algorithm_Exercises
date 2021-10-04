// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  let splitStr = str.split(' ');
  const newStr = splitStr.map(char => 
    String.fromCharCode(parseInt(char, 2)))
  return newStr.join("");
}
