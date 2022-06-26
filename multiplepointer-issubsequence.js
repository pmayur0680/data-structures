// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters 
// in the first string form a subsequence of the characters in the second string. In other words, 
// the function should check whether the characters in the first string appear somewhere in the second string, 
// without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)
// Pseudocode
// set pointer for both string starting at 0
// loop through until one of the string is exhausted
    // check if value for both string at their respective index is same character
      // increment both pointer
    // else increment string pointer
// return boolean comparison of substring pointer i and length of substring      
function isSubsequence(substr, str) {
    let i = 0, j = 0;
    while(i < substr.length && j < str.length) {
        if(substr[i] === str[j]) {
            i++;j++;
        } else {
            j++;
        }          
    }
    return(i == substr.length);
  }
  console.log(isSubsequence('hello', 'hello world'))