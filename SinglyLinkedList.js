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
}