class Node:

    def __init__(self, data, index = None):

        self.data = data
        self.index = index
        
        
class Graph:

    @classmethod
    def createFromNodes(self, nodes):

        return Graph(len(nodes), len(nodes), nodes)

    def __init__(self, row, col, nodes = None):

        self.adjacencyMatrix = [[0] * col for _ in range(row)]
        self.nodes = nodes

        for i in range(len(self.nodes)):

            self.nodes[i].index = i

    def connectDir(self, node1, node2, weight):

        node1 = self.getIndexFromNode(node1)
        node2 = self.getIndexFromNode(node2)
        self.adjacencyMatrix[node1][node2] = weight

    def connect(self, node1, node2, weight):

        self.connectDir(node1, node2, weight)
        self.connectDir(node2, node1, weight)

    def connectionsFrom(self, node):

        node = self.getIndexFromNode(node)

        return [(self.nodes[colNum], self.adjacencyMatrix[node][colNum]) for colNum in range(len(self.adjacencyMatrix[node])) if self.adjacencyMatrix[node][colNum] != 0]

    def connectionsTo(self, node):

        node = self.getIndexFromNode(node)
        column = [row[node] for row in self.adjacencyMatrix]

        return [(self.nodes[rowNum], column[rowNum]) for rowNum in range(len(column)) if column[rowNum] != 0]

    def printAdjencyMatrix(self):

        for row in self.adjacencyMatrix:

            print(row)

    def node(self, index):

        return self.nodes[index]
    
    def removeConn(self, node1, node2):

        self.removeConnDir(node1, node2)
        self.removeConnDir(node2, node1)

    def removeConnDir(self, node1, node2):

        node1, node2 = self.getIndexFromNode(node1), self.getIndexFromNode(node2)
        self.adjacencyMatrix[node1][node2] = 0   

    def canTraverseDir(self, node1, node2):

        node1, node2 = self.getIndexFromNode(node1), self.getIndexFromNode(node2)

        return self.adjacencyMatrix[node1][node2] != 0  

    def hasConn(self, node1, node2):

        return self.canTraverseDir(node1, node2) or self.canTraverseDir(node2, node1)

    def addNode(self,node):

        self.nodes.append(node)
        node.index = len(self.nodes) - 1
        for row in self.adjacencyMatrix:
            row.append(0)     
            self.adjacencyMatrix.append([0] * (len(self.adjacencyMatrix) + 1))

    def getWeight(self, n1, n2):

        node1, node2 = self.getIndexFromNode(n1), self.getIndexFromNode(n2)

        return self.adjacencyMatrix[node1][node2]

    def getIndexFromNode(self, node):

        if not isinstance(node, Node) and not isinstance(node, int):

            raise ValueError("node must be an integer or a Node object")

        if isinstance(node, int):

            return node

        else:

            return node.index
            
    def dijkstra(self, node):

        nodenum = self.getIndexFromNode(node)

        dist = [None] * len(self.nodes)

        for i in range(len(dist)):

            dist[i] = [float("inf")]
            dist[i].append([self.nodes[nodenum]])
        
        dist[nodenum][0] = 0

        queue = [i for i in range(len(self.nodes))]

        seen = set()

        while len(queue) > 0:

            minDist = float("inf")
            minNode = None

            for n in queue: 

                if dist[n][0] < minDist and n not in seen:

                    minDist = dist[n][0]
                    minNode = n
            
            queue.remove(minNode)
            seen.add(minNode)

            connections = self.connectionsFrom(minNode)

            for (node, weight) in connections: 

                totDist = weight + minDist

                if totDist < dist[node.index][0]:

                    dist[node.index][0] = totDist
                    dist[node.index][1] = list(dist[minNode][1])
                    dist[node.index][1].append(node)

        return dist

a = Node("A")
b = Node("B")
c = Node("C")
d = Node("D")
e = Node("E")
f = Node("F")

graph = Graph.createFromNodes([a,b,c,d,e,f])

graph.connect(a,b, 1)
graph.connect(a,c, 2)
graph.connect(a,e, 3)
graph.connect(b,c, 4)
graph.connect(b,d, 5)
graph.connect(c,d, 6)
graph.connect(c,f, 7)
graph.connect(d,e, 8)

print("")

graph.printAdjencyMatrix()

print("")

print([(weight, [n.data for n in node]) for (weight, node) in graph.dijkstra(a)])

print("")
