## Linked List

Linked List is a linear data structure consists of nodes where each node contains data field (value) and a reference (link/pointer) to the next node in the list. Head, tail, and length are properties of linked list.

### Array v Linked List

- Array store elements in contiguous memory locations and allows faster access to an element at a specific index. In Linked List, elements are usually not stored in contiguous locations.
- Array size cannot be altered at runtime. However, in a linked list allows for a dynamic size that can change at runtime.
- Any element in an array can be directly accessed with its index; however in the case of a linked list, all the previous elements must be traversed to reach any element.
- In array insertion and deletion operation takes more time but in linked last these operations are fast.

## Singly/Doubly Linked List

In Singly Linked List, each node contains data field (value) and a reference (link/pointer) to the next node in the list.

In Doubly Linked List, each node contains data field (value) and a reference (link/pointer) to the next and previous node in the list.

Doubly Linked List are better than Singly for finding nodes and can be done in half time. However, they do take up more memory considering extra pointer.

## Stack

Stack is an abstract (behavior is defined by principles) data structure that abides by a LIFO principle (push & pop or unshift & shift). Mainly use in managing function invocations. It can be implemented using push & pop meaning adding to end and removing from end OR unshift and shift meaning adding to beginning and removing from beginning).

### LIFO

element inserted at the last, is the first element to come out of the list.

## Queue

Stack is an abstract (behavior is defined by principles) data structure that abide by a FIFO principle. It can be implemented using push & shift meaning adding to end and removing from beginning.

enqueue is a queue operation where you add an item at the back of a queue. dequeue is a queue operation where you remove an item from the front of a queue

### FIFO

element inserted at the first, is the first element to come out of the list.

## Trees

Tree is a nonlinear data structure consisting of nodes in a parent/child relationship.

- Root: The top node in a tree, the prime ancestor.
- Child: A node directly connected to another node when moving away from the root, an immediate descendant.
- Parent: The converse notion of a child, an immediate ancestor.
- Siblings - A group of nodes with the same parent.
- Leaf: A node with no children.
- Edge: The connection between one node and another.

Example: HTML DOM, Network Routing, Abstract Syntax Tree, Artificial Inteligence, Files & Directory Structure

### Types of Trees

- Trees: Each node can have any number of child nodes.
- Binary Trees: is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
- Binary Search Trees (BST): is a special type of binary tree which has the following properties.
  - Each parent node can have at most two children.
  - Every node to the left of a parent is always less than the parent.
  - Every node to the right of a parent is always greater than the parent.

### Tree Traversal

Tree Traversal Algorithms can be classified in the following two categories by the order in which the nodes are visited:

- Breadth-first Search Algorithm: It starts at the root of the tree or graph and investigates all nodes at the current depth level before moving on to nodes at the next depth level.

![alt text](https://miro.medium.com/max/1000/1*2NIfAdSadsdK2rP015f6Xg.gif)

- Depth-First Search (DFS) Algorithm: It starts with the root node and first visits all nodes of one branch as deep as possible of the chosen Node and before backtracking, it visits all other branches in a similar fashion. There are three sub-types: InOrder, PreOrder, PostOrder.

### InOrder Traversal

- Go to left-subtree
- Visit Node
- Go to right-subtree

![alt text](https://miro.medium.com/max/1000/1*bxQlukgMC9cGv_MFUllX2Q.gif)

### Preorder Traversal

- Visit Node
- Go to left-subtree
- Go to right-subtree

![alt text](https://miro.medium.com/max/1000/1*UGoV21qO6N8JED-ozsbXWw.gif)

### Postorder Traversal

- Go to left-subtree
- Go to right-subtree
- Visit Node

![alt text](https://miro.medium.com/max/1000/1*UGrzA4qtLCaaCiNAKZyj_w.gif)

### BFS v DFS

Time complexity is same for BFS and DFS.
If it's really wide tree breadth first could store or take up a lot more space for queue. If it's really deep long tree then depth first could end up taking up more space.

## Binary Heaps

Binary Heap is a data structure that takes the form of a binary tree with two additional constraints:

- all levels of the tree except last one are fully filled, nodes of the level are filled from left to right.
- the key stored in each node is >= or <= the key's in node's children.

Mathematically, for any index of array n.. The left child is stored at 2n + 1 and right child at 2n + 2.
to get parent from child, for any child node at index n..Its parent is at index floor((n-1)/2).

Binary Heaps are used to implement Priority Queues and with graph traversal algorithms.

### MaxBinaryHeap v MinBinaryHeap

In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

## Priority Queue

A data structure where each element has a priority associated with it. Elements with highest priority are served before elements with lowest priorities.
