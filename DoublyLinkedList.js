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
        var oldTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;     
            oldTail.prev = null;       
        }
        this.length--;        
        return oldTail;
    }    
    // removing node from beginning
    // if no head, return undefined
    // store current head in variable
    // if length = 1, set head, tail to null
    // else set head = head.next
    // set head prev to null
    // set old head next to null
    // decrement length, return oldhead  
    shift() {
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;     
            oldHead.next = null;       
        }
        this.length--;        
        return oldHead;       
    }
    // adding a node to the beginning of list
    // create a new node with value passed in
    // if not head, set head and tail to newnode
    // else set prev on head = newnode
    // set next on newnode = head
    // set new head = newnode
    // increment length, return this
    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {     
        this.head.prev = newNode;       
        newNode.next = this.head;
        this.head = newNode;        
        }
        this.length++;
        return this;
    }
    // get - find item by index
     // accept index
     // if index is less than 0 or greater than or equal to length return undefined
     // if index is less than or equal to half the length of the list
        // loop through the list starting from head towards middle and return node once it found
     // elseif index is greater than or equal to half the length of the list
        // loop through the list starting from tail towards middle and return node once it found    
     get(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index <= this.length/2) {
            var counter = 0;
            var current = this.head;
            while(counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            var counter = this.length - 1;
            var current = this.tail;
            while(counter !== index) {
                current = current.prev;
                counter--;
            }
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
     // set next and prev on that node to be new node
     // set next and prev on new node to be replaced node
     // increment length
     // return true
     insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); // push return string, using !! change to bool
        if(index === 0) return !!this.unshift(val); // unshift return string, using !! change to bool
        var newNode = new Node(val);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }
     // remove - remove node at a specific position
    // if index < 0 or > length, return false
     // if index = length - 1, remove using pop
     // if index = 0, remove using shift
     // else use get to access node at index - 1
     // set next and prev on that node to be next of next node being next is removed     
     // decrement length
     // return true
     remove(index) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return this.shift();        
        removedNode.prev.next = removedNode.next;
        removed.next.prev = removed.prev;       
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}