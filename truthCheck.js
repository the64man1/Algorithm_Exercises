// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// n other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    }
    if (!collection[i][pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "notsex": "female"}], "sex");
