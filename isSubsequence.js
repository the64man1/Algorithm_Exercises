//Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing

//Completed using multiple pointers, purposefully without regular expressions


function isSubsequence(str1, str2) {
  let left = 0;
  let right = 0;
  if(!str1) return true;
  for (let i = 0; i < str2.length; i++) {
    if(left === str1.length) return true;
    if(str1[left] !== str2[right]) {
          right++;
      }
      if(str1[left] === str2[right]) {
          left++;
          right++;
      }
  }
  return false;
}
