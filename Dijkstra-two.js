// compare to v1, priority queue is now using Heap
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
     // Accepts value and priority and makes a new node, puts it in the right spots based off its priority  
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            // swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
   // Removes root element, returns it and rearranges heap using priority
    dequeue() {
        const min = this.values[0]; // root
        const end = this.values.pop(); // last element
        if(this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
        }           
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            // not outbound
            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            // not outbound
            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if(
                    // if swap not already done and right > element OR
                    // swap done we found left > element but right > left force swap
                    (swap === null && rightChild < element) || 
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            // do actual swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2, weight) {
        // weight: weight can be written as weight
       // this.adjacencyList[v1].push({node: v2, weight: weight});
       this.adjacencyList[v1].push({node: v2, weight});
       this.adjacencyList[v2].push({node: v1, weight});
    }
// Dijkstra's algorithm
    // accept starting and ending vertex
    // create distances object to store shortest distace to each vertex from starting point
    // add each vertex to priority queue where priority is shortest distance - initial with 0 for start and 
    // infinity for other vertex
    // create object previous where key = vertex with initial value null
    // loop as long as there is anything in priority queue
        // dequeue a vertex from queue
        // if vertex is same as ending point, we are done
        // otherwise loop through each value in list a the vertex
          // calculate the distance to that vertex from starting vertex
          // if the distance is less than currently stored in distance object
            // update the distance with new lower distance
            // update previous
            // enque the vertex with total distance from start node
    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = []; // return at end
        let smallest;
        // intialize distances object, priority queue, and previous object
        for (let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
       // loop through queue 
       while(nodes.values.length) {
          smallest = nodes.dequeue().val; // nodes.dequeue() = { val: 'A', priority: 0 }
          if(smallest === finish) {
            // DONE
//            console.log(distances);
            //console.log(previous);
            // reverse previous
            while(previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break; // don't go for each node if shortest distance found
          } 
          if (smallest || distances[smallest] !== Infinity) {
            for(let neighbor in this.adjacencyList[smallest]) {
                // find neighboring node
                let nextNode = this.adjacencyList[smallest][neighbor];
                // calculate distance to neighboring node
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.node;  
                if(candidate < distances[nextNeighbor]) {
                    // update new smallest distance to neighbor
                    distances[nextNeighbor] = candidate;
                    // update new previous for nextNeighbor
                    previous[nextNeighbor] = smallest;
                    // enqueue with new priority
                    nodes.enqueue(nextNeighbor, candidate);
                }               
            }
          }
       }
       return path.concat(smallest).reverse();
    }
}
var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
console.log(graph.Dijkstra("A", "E"));            