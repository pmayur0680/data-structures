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
    // Recursive DFS
    // Accept a starting node
    // Create empty array to store the end result, return at end
    // Create an object to store visited vertices
    // Create helper function which accepts a vertex
        // return if vertex is empty
        // place vertex in visted object and push into result array
        // loop over all values in list for that vertex
        // if any on that values not been visited, recursively invoke helper function with that vertex
    // invoke helper function with starting vertex
    // Return the resul array
    depthFirstRecursive(start) {
        const result = [], visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
            
        })(start);
        return result;
    }
    // Iterative DFS
    // Accept a starting node
    // Create empty array (stack) to help use keep track of vertices
    // Create empty array to store the end result, return at end
    // Create an object to store visited vertices
    // After starting vertex to the stack, mark it visited
    // While the stack has something in it
        // pop the next vertex from the stack
        // if the vertex hasn't been visited yet
            // mark it as visited
            // add it to the result list
            // push all neighbors into the stack
    // Return the resul array
    depthFirstIterative(start) {
        const result = [], visited = {};
        const stack = [start];
        let currentVertex;
        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
}
