// Implement a stack using two queues
// To construct a stack using two queues (q1, q2), we need to simulate the stack operations by using queue operations:

// push (E element)
// - if q1 is empty, enqueue Stack E to q1
//  - if q1 is not empty, enqueue all elements from q1 to q2, 
//    - then enqueue E to q1, and enqueue all elements from q2 back to q1
// pop
// dequeue an element from q1
// q1 acts as the main source for the stack, while q2 is just a helper queue that we use to preserve the order
// expected by the stack.
