function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const searchKey = Object.keys(source);
  const searchVal = Object.values(source);

  for (let i = 0; i < collection.length; i++) {
    const targetKey = Object.keys(collection[i]);
    const targetVal = Object.values(collection[i]);
    console.log(targetKey)
    if (targetKey[0] == searchKey || targetKey[1] == searchKey || targetKey[2] == searchKey) {
      console.log('hi')
      if (targetVal[0] == searchVal || targetVal[1] == searchVal || targetVal[2] == searchVal) {
        console.log(arr.push(collection[i]));
      }
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
