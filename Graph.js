// Undirected graph implementation
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    // Add vertex
    // Add key to the adjacencyList with name given and value be empty array
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    // Add edge
    // Accept two vertices: v1 and v2
    // Find in list key of v1 and push v2 to array
    // Find in list key of v2 and push v1 to array
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    // Remove edge
    // Accept two vertices: v1 and v2
    // Find in list key of v1 and reassing excluding v2
    // Find in list key of v2 and reassing excluding v1
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter( vertex => vertex !== v2 );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter( vertex => vertex !== v1 );
    }
    // Remove vertex
    // Accept vertex to remove
    // Loop as long as there are any other vertices in the list for that vertex
        // inside loop, call removeEdge for each edge
    // delete the key in list for that vertex
    removeVertex(vertex) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }        
        delete this.adjacencyList[vertex];
    }
}