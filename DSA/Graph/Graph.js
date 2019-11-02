class Graph
{
    constructor()
    {
        this.adjacencyList={};
    }
    addVertex(v){
        if(this.adjacencyList[v]) return;
        this.adjacencyList[v]=[];
    }
    addEdge(v1,v2){
        if(v1==v2) return;
        if(!v1||!v2) return;
        if(!this.adjacencyList[v1]) this.adjacencyList[v1]=[];
        if(!this.adjacencyList[v2]) this.adjacencyList[v2]=[];
        if(this.adjacencyList[v1].indexOf(v2)>-1 || this.adjacencyList[v2].indexOf(v1)>-1)  return;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        
    }
    removeEdge(v1,v2)
    {
           
        if(v1==v2) return;
        if(!v1|| !v2) return;
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        if(this.adjacencyList[v1].indexOf(v2)==-1 || this.adjacencyList[v2].indexOf(v1)==-1) return;
        
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2),1);
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1),1);

    }
    removeVertex(v)
    {
        let arr=[...this.adjacencyList[v]];
        for(let i=0;i<arr.length;i++)
            this.removeEdge(arr[i],v);
        delete this.adjacencyList[v]

    }
    dfs(v,visited,result)
    {
        if(!this.adjacencyList[v]) return;
        if(!visited[v]) 
        {   visited[v]=true;
            result.push(v);
        }
        else return;
        for (const i of this.adjacencyList[v]) {
            this.dfs(i,visited,result);
        }
    } 
    dfs_recursive(v)
    {
        if(!this.adjacencyList[v]) return null;
        let visited={};
        let result=[];
        this.dfs(v,visited,result);
        return result;
    }
    dfs_iterative(v)
    {
        if(!this.adjacencyList[v]) return ;
        let visited={};
        let result=[];
        let stack=[];
        stack.push(v);
        visited[v]=true;
        while(stack.length>0)
        {
            let el=stack.pop();
            result.push(el);
            for(let i of this.adjacencyList[el])
            {   if(!visited[i])
                {  
                    stack.push(i);
                    visited[i]=true;
                }
            }
        }
        return result;
    }
    bfs_iterative(v)
    {
        if(!this.adjacencyList[v]) return;
        let visited={};
        let result=[];
        let queue=[];
        queue.push(v);
        visited[v]=true;
        while(queue.length)
        {
            let el=queue.shift();
            result.push(el);
            
            for(let i of this.adjacencyList[el])
                {   
                    if(!visited[i])
                    {                    
                    queue.push(i);
                    visited[i]=true;
                    }
                }
            
        }
        return result;
    }
    

}
let g=new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B");
g.addEdge("A","C");
g.addEdge("B","D");
g.addEdge("C","E");
g.addEdge("D","E");
g.addEdge("D","F");
g.addEdge("E","F");

console.log(g.dfs_recursive("A"));
console.log(g.dfs_iterative("F"));
console.log(g.bfs_iterative("A"));

//Algo on recursion

/*
1.If adjaceny list not present return nil
2.Intialize an result=[] and visited={}
3.Pass it to dfs_recursive
4.dfs_recursive - a.if adjacency list is not present return
                  b.visited[v]=true  
                  c.Push it into result  
                  d.Iterate all over the adjacency list and pass the item to function
5.Return the result  

*/

//Algo on iterative