// Stack implementation using Singly Linked List > adding and removing from beginning
// using same pop from SinglyLinkedList is O(n) not constant O(1) due to traverse to end
// following implementation has time complexity constant O(1) for pop
// however, using shift and shift methods from SinglyLinkedList class will do the job
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }    
    // push - insert new to end (head)
     // create a new node with value passed in
    // if not node, set head and tail to newnode
    // else store first in variable
    // reset first to newnode and set next to be previous first
    // increment length, return this
    push(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {        
        var temp = this.first;
        this.first = newNode;
        this.first.next = temp;            
        }        
        return ++this.size;
    }
     // pop - remove new node from beginning (head)
    // if no head, return null
    // store first in variable
     // if length = 1, set first and last to null
    // else set next in list to be first   
    // decrement length, return removed first node
    pop() {
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