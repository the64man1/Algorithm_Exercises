// Count unique integer values in an array
// Array can contain negative numbers, but is already sorted

function countUniqueValues(arr){
  //pointer for starting at index 0
  let left = 0;
  //pointer for starting at the end of the array, index arr.length - 1
  let right = 1;
  if (arr.length === 1 || arr.length === 0) {
      return left;
  }
  while (right <= arr.length) {
  	if (arr[left] < arr[right]) {
    	left++;
      arr[left] = arr[right];
    } else {
    	right++;
    }
  }
  return (left+1);
}
