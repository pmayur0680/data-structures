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
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
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
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
     }   
    //   Depth-first Search: PreOrder: 1. Visit Node 2. Go to left-subtree 3. Go to right-subtree
    //      Create a variable to store values of node visited
    //      Write a helper function which accepts a node    
    //          1. push the value of the node into the variable that stores the nodes
    //          2 if there is left on the node, call helper function with left property of node
    //          3 if there is right on the node, call helper function with right property of node
    //     Invoke helper function with the root
    //     Return the variable that stores the values
    DFSPreOrder() {
        var data = [];        
        function traverse(node) {
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    //   Depth-first Search: PostOrder: 1. Go to left-subtree 2. Go to right-subtree 3. Visit Node
    //      Create a variable to store values of node visited
    //      Write a helper function which accepts a node    
    //          1 if there is left on the node, call helper function with left property of node
    //          2 if there is right on the node, call helper function with right property of node
    //          3. push the value of the node into the variable that stores the nodes    
    //     Invoke helper function with the root
    //     Return the variable that stores the values
    DFSPostOrder() {
        var data = [];        
        function traverse(node) {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
     //   Depth-first Search: InOrder: 1. Go to left-subtree 2. Visit Node 3. Go to right-subtree
    //      Create a variable to store values of node visited
    //      Write a helper function which accepts a node    
    //          1 if there is left on the node, call helper function with left property of node
    //          2. push the value of the node into the variable that stores the nodes    
    //          2 if there is right on the node, call helper function with right property of node
    //     Invoke helper function with the root
    //     Return the variable that stores the values
    DFSInOrder() {
        var data = [];        
        function traverse(node) {
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);            
        }
        traverse(this.root);
        return data;    
    }
    // 1] If no children - Just delete.
   // 2] If a single child - Copy that child to the node.
   // 3]If two children - Determine the next highest element (inorder successor) in the right subtree.
   // Replace the node to be removed with the inorder successor. Delete the inorder successor duplicate.

    removeNode(value, root = this.root, left, right) {       
        
    }
}
