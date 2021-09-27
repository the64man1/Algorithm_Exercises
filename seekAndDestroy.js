// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(args) {
  let numsToRemove = [...arguments].slice(1);
  let array = arguments[0];
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if(!numsToRemove.includes(array[i])) {
      answer.push(array[i])
    }
  }
  return answer;
}
