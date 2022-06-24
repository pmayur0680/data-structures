class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let SOME_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * SOME_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    // 1. accepts key and value
    // 2. Hashes the key
    // 3. stores key-value pair in hash table array via seperate chaining
    set(key, value) {
       let index = this._hash(key);
       if(!this.keyMap[index]) {
        this.keyMap[index] = [];
       }
       this.keyMap[index].push([key, value]);
    }
    // 1. accepts a key
    // 2. Hashes the key
    // 3. Retrieve key-value pair in hash table array via seperate chaining
    // 4. if key not found, return undefined
    get(key) {
       let index = this._hash(key);
       if(this.keyMap[index]) {
        // loop over array of items at index
        for (let i = 0; i < this.keyMap[index].length; i++) {
            // key at [0], val at [1]
           if(this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1]; // return value
           }             
        }
       }
       return undefined;
    }
    // return all keys in table
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
        if(this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                if(!keysArr.includes(this.keyMap[i] [j] [0])) 
                    keysArr.push(this.keyMap[i] [j] [0]);            
                }             
            }
        } 
        return keysArr;
    }
    // return all values in table
    values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
    if(this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
            if(!valuesArr.includes(this.keyMap[i] [j] [1])) 
                valuesArr.push(this.keyMap[i] [j] [1]);            
            }             
        }
    } 
    return valuesArr;
    }       
}
