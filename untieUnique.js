function uniteUnique(args) {
  let mergedArr = [];
  for (let i = 0; i < arguments.length; i++) {
    mergedArr.push(...arguments[i]);
  }
  console.log(mergedArr);
  for (let i = 0; i < mergedArr.length; i++) {
    
  }
  return args;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
