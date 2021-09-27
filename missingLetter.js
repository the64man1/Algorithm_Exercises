// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let letters = str.split('');
  for (let i = 0; i < letters.length - 1; i++) {
    let val1 = str.charCodeAt(i);
    let val2 = str.charCodeAt(i+1);
    if (val1 + 1 != val2) {
      return String.fromCharCode(val1 + 1);
    }
  }
  return undefined;
}
