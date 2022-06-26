// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine
//  if there is a pair of values in the array where the average of the pair equals the target average. 
//  There may be more than one pair that matches the average target.
// Time: O(N)
// Space: O(1)
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
// Pseudocode
// Declare left = 0 , right = end 
// run loop until left < right
// find average of left and right
// if avg = target, return true
// if avg > targt, right-- else left++
function averagePair(array, target){
    let left = 0
    let right = array.length - 1
    while (left < right) {
        let average = (array[left] + array[right]) / 2;
        if (average === target) {
           return true
        } else if (average > target) {
           right--
        } else {
           left++
        }
     }
     return false;
  }