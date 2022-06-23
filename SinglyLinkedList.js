// A node will have value and reference to next node
class Node {
    constructor(val) {
        this.val = val; 
        this.next = null;
    }
}
// Singly linked list will have head, tail, and length property
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push to end
    // create a new node with value passed in
    // if not head, set head and tail to newnode
    // else set tail next = newnode and tail = newnode
    // increment length, return this
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            // empty list
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // pop to end - remove tail
    // if no head, return undefined
    // traverse to find tail, keep record of node before tail to set as new tail    
    // set tail = newtail, length-- and return pop node
    // if length = 0, set head and tail to null
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            // keep tail one behind current (pop)
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}