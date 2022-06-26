// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in. 
//  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

function areThereDuplicates(...arr) {
    if(arr.length === 0) return false;
    let keyMap = {};
    for(let value of arr) {
         if(keyMap[value]) return true;
         else
         keyMap[value] = true;    
    }  
    return false;
  }