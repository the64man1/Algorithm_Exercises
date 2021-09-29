// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(args) {
  let mergedArr = [];
  for (let i = 0; i < arguments.length; i++) {
    mergedArr.push(...arguments[i]);
  }
  let answer = [mergedArr[0]]
  for (let i = 1; i < mergedArr.length; i++) {
    let head = mergedArr.slice(0,i);
    if (!head.includes(mergedArr[i])) {
      answer.push(mergedArr[i])
    }
  }
  return answer;
}
