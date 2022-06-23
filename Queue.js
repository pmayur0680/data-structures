// Queue implementation using Singly Linked List > adding (enqueue) to end and removing (dequeue) from beginning
// using same pop from SinglyLinkedList is O(n) not constant O(1) due to traverse to end
// following implementation has time complexity constant O(1) 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }    
    // enqueue - insert new to end
     // create a new node with value passed in
    // if not node, set first and last to newnode
    // else set next to current last = new node
    // and last = new node
    // increment length, return 
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {                
        this.last.next = newNode;            
        this.last = newNode;
        }        
        return ++this.size;
    }
     // dequeue - remove from beginning
    // if no first, return null
    // store first in variable
    // if length = 1, set first and last to null
    // else set next in list to be first   
    // decrement length, return removed first node
    dequeue() {
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;        
        this.size--;    
        return temp.value;        
    }
}