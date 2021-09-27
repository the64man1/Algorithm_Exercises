// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Return the provided character as the first element in each array.

function pairElement(str) {
  let letters = str.split('');
  let answer = [];
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "A") {
      let subArr = ["A", "T"];
      answer.push(subArr);
    } else if (letters[i] === "T") {
      let subArr = ["T", "A"];
      answer.push(subArr);
    } else if (letters[i] === "C") {
      let subArr = ["C", "G"];
      answer.push(subArr);
    } else {
      let subArr = ["G", "C"];
      answer.push(subArr);
    }
  }
  return answer;
}
