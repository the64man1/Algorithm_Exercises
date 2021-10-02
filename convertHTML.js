// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let strArr = str.split('');
  let answerArr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "&") {
      answerArr.push("&amp;");
    } else if (strArr[i] === "<") {
      answerArr.push("&lt;");
    } else if (strArr[i] === ">") {
      answerArr.push("&gt;");
    } else if (strArr[i] === "\"") {
      answerArr.push("&quot;");
    } else if (strArr[i] === "\'") {
      answerArr.push("&apos;");
    } else {
      answerArr.push(strArr[i]);
    }
  }
  return answerArr.join('');
}
