//Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average

function averagePair(arr, avg){
  let left = 0;
  let right = arr.length - 1;
  const target = avg * 2;
  while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === target) {
          return true;
      } else if (sum > target) {
          right--;
      } else {
          left++;
      }
  }
  return false;
}
