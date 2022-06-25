class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push( {val, priority} );
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort( (a, b) => a.priority - b.priority);
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