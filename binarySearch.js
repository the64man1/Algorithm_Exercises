//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists; otherwise, return -1;

function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
  	let middle = Math.ceil((left + right)/2);
  	if (arr[middle] === target) {
  	    return middle;
  	} else if (arr[middle] > target) {
  	    right = middle - 1;
  	} else {
  	    left = middle + 1;
  	}
  }
  return -1;
}
