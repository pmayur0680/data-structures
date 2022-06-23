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

- Root is a top node in a tree.
- Child is a node directory connected to another node when moving away from the Root.
- Parent - The converse notion of a child.
- Siblings - A group of nodes with the same parent.
- Leaf - A node with no children.
- Edge - The connection between one node and another.

Example: HTML DOM, Network Routing, Abstract Syntax Tree, Artificial Inteligence, Files & Directory Structure

### Types of Trees

- Trees: Each node can have any number of child nodes.
- Binary Trees: Each node can have at most two child nodes.
- Binary Search Trees (BST): Each parent node can have at most two children. Every node to the left of a parent is always less than the parent. Every node to the right of a parent is always greater than the parent.
