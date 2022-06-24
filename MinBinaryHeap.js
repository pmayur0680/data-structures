class MinBinaryHeap {
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
            if(element >= parent) break;
            // swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    // extractMax - remove root node
    // swap first value (root) with last one
    // have the new root sink down to correct spot
        // parent index starts at 0
        // find index of left child if any = 2 * index + 1;
        // find index of right child if any = 2 * index + 2;
        // if value of left or right child is > element, swap with largest child
        // replace parent index with child index you swapped
        // keep looping and swapping until neither child is larger than element          
    // return popped old root
        extractMax() {
           const min = this.values[0]; // root
           const end = this.values.pop(); // last element
           if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
           }           
           return min;
        }
        sinkDown() {
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0];
            while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                // not outbound
                if(leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if(leftChild < element) {
                        swap = leftChildIdx;
                    }
                }
                // not outbound
                if(rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if(
                        // if swap not already done and right > element OR
                        // swap done we found left > element but right > left force swap
                        (swap === null && rightChild < element) || 
                        (swap !== null && rightChild < leftChild)
                    ) {
                        swap = rightChildIdx;
                    }
                }
                if(swap === null) break;
                // do actual swap
                this.values[idx] = this.values[swap];
                this.values[swap] = element;
                idx = swap;
            }
        }
}