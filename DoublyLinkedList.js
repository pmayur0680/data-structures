class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // adding a node to the end of list
    // create a new node with value passed in
    // if not head, set head and tail to newnode
    // else set tail next = newnode
    // set previous on new node to old tail
    //  tail = newnode
    // increment length, return this
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            // empty list
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // removing node from end
    // if no head, return undefined
    // store the current tail in variable
    // if length is 1, set head and tail to null
    // update tail to be the previous node
    // set new tail next to null
    // decrement length, return this
    pop() {
        if(!this.head) return undefined;        
        var poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;     
            poppedNode.prev = null;       
        }
        this.length--;        
        return poppedNode;
    }    
}