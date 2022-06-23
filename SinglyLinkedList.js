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
    // insert - add node at a specific position
     // if index < 0 or > length, return false
     // if index = length, insert at end using push
     // if index = 0, insert at begining using unshift
     // else use get to access node at index - 1
     // set next on that node to be new node
     // set next on new node to be replaced node
     // increment length
     // return true
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); // push return string, using !! change to bool
        if(index === 0) return !!this.unshift(val); // unshift return string, using !! change to bool
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    // remove - remove node at a specific position
    // if index < 0 or > length, return false
     // if index = length - 1, remove using pop
     // if index = 0, remove using shift
     // else use get to access node at index - 1
     // set next on that node to be next of next node being next is removed     
     // decrement length
     // return true
     remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return this.shift();        
        var prev = this.get(index - 1);
        var removed = prev.next;
        prev.next = removed.next;        
        this.length--;
        return removed;
    }
    // reverse - reversing the linked list in place
     // swap the head and tail
     // create a variable called next
     // create a variable called prev
     // create a variable called node and initialize it to the head
     // loop through the list
     // set next to be the next on whatever node is
     // set prev to be the value of node
     // set node to be the value of next
     // return true
     // 13 -> 27 -> 32 -> 71 to 71 -> 32 -> 27 -> 13
     reverse() {
        // swap (head = 13, tail = 71 to tail = 13, head = 71)
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        // iterate
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
     }
     // helper to see action in array
     print() {
        var arr = [];
        var current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
     }
   
}