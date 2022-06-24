class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    // insert new node
    // push the value into the values property on the heap
    // bubble the value up to its correct spot
        // index = length of values - 1
        // parentindex = floor((index-1)/2)
        // keep looping as long value at parentindex is less than value at childindex
          // swap value of parentindex and childindex
          // set index to be parentindex
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            // swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
}