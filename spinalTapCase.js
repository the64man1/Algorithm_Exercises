// Convert a string to spinal case. 
// Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  for (let i = 1; i < str.length; i++) {
    let unicode = str[i].charCodeAt();
    if (unicode > 64 && unicode < 91) {
      let prevUnicode = str[i-1].charCodeAt();
      if (prevUnicode === 32 || prevUnicode === 95) {
        let splitStr = str.split('');
        splitStr.splice(i-1,1,"-");
        str = splitStr.join('');
      }
      if (prevUnicode > 96 && prevUnicode < 123) {
        let splitStr = str.split('');
        splitStr.splice(i,0,"-");
        str = splitStr.join('');
      }
    }
    if (unicode === 32) {
      str = str.replace(" ", "-");
    }
  }
  return str.toLowerCase();
}
