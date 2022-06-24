// Priority Queue implemented using MaxBinaryHeap where higher number will highest priority
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
     // Accepts value and priority and makes a new node, puts it in the right spots based off its priority  
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority <= parent.priority) break;
            // swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
   // Removes root element, returns it and rearranges heap using priority
    dequeue() {
        const max = this.values[0]; // root
        const end = this.values.pop(); // last element
        if(this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
        }           
        return max;
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
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            // not outbound
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    // if swap not already done and right > element OR
                    // swap done we found left > element but right > left force swap
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
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