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
     // shift - remove new node from beginning (head)
    // if no head, return undefined
    // set head = head.next
    // length-- and return removed node (original head)
    // if length = 0, set tail to null
     shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) this.tail = null;
        return currentHead;        
    }
     // unshift - insert new to beginning (head)
     // create a new node with value passed in
    // if not head, set head and tail to newnode
    // else set newnode next = head
    // set new head = newnode
    // increment length, return this
     unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {        
        newNode.next = this.head;
        this.head = newNode;        
        }
        this.length++;
        return this;
    }
     // get - find item by index
     // accept index
     // if index is less than 0 or greater than or equal to length return undefined
     // traverse next until you reach the index and retun node at specific index
     get(index) {
        if(index < 0 || index >=this.length) return undefined;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
     // set (update) value at existing index
     // accept index and new value
     // use get function to find node at index
     // if node is not found, return false
     // if node is found, set new value and return true
     set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}