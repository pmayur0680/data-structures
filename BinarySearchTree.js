class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root =  null;
    }
    // Inserting a node
    // create a new node with value passed in
    // if not root, set root = newnode 
    // else if value of new node > root, check to see if there is a node to right
            // if there is, move to that node and repeat steps
            // if not, add that node as the right
    // else if value of new node < root, check to see if there is a node to left
            // if there is, move to that node and repeat steps
            // if not, add that node as the left    
    insert(value) {
        var newNode = new Node(value); 
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value < current.value) {
                    // no left
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } 
                    // if left, move current to current.left
                    current = current.left;
                    
                } else if(value > current.value) {
                    // no right
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    // if right, move current to current.right
                    current = current.right;                    
                }
            }            
        }

    }
     // Finding a node    
    // if not root, return null
    // else if value of new node > root, check to see if there is a node to right
            // if there is, move to that node and repeat steps
            // if not, add that node as the right
    // else if value of new node < root, check to see if there is a node to left
            // if there is, move to that node and repeat steps
            // if not, add that node as the left    
    find(value) {
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(current && !found) {
            if(value < current.value) {                
                current = current.left;                
            } else if(value > current.value) {                
                current = current.right;                    
            } else {
                return true;
            }
            }false
            return current;
        }
    //   Breadth-first Search  
    //      Create an empty queue (array) and a variable to store values of node visited
    //      Place root node in the queue
    //      Loop as long as there is anything in the queue
    //          1. Dequeue a node from the queue and push the value of the node into the 
    //             variable that stores the nodes
    //          2 if there is left on the node dequeued, add it to queue
    //          3 if there is right on the node dequeued, add it to queue
    //     Return the variable that stores the values
                
     BFS() {
        var node = this.root,
            data = [],
            queue = [];
        queue.push(this.root);
        while(queue.length) {
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
     }   
  
}