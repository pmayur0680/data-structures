// "a".charCodeAt(0) - 96 = 1 to "z".charCodeAt(0) - 96 = 26
// "hello" -> add value for each, total = 52
// if length of array passed is 11, 52 % 11 = 8, we can store pink at 8th index
// hash("pink", 9) >> 1st argument string to store, 2nd argument length of array - how many more string in table
// function hash(key, arrayLen) {
//     let total = 0;
//     for(let char of key) {
//         let value = char.charCodeAt(0) - 96;
//         total = (total + value) % arrayLen;
//     }
//     return total;
// }
// Refactored constant time and distributed with prime number
function hash(key, arrayLen) {
    let total = 0;
    let SOME_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * SOME_PRIME + value) % arrayLen;
    }
    return total;
}
console.log(hash("pink", 9));