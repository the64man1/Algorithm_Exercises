// My solution to implementing a selection sort function, completed during the Selection Sort section of "JavaScript Algorithms and Data Structures Masterclass" by Colt Steele on Udemy

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
  	let start = 0 + i;
    let min = i;
    for (let j = start; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
      	min = j;
      }
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}
