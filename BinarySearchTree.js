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
}