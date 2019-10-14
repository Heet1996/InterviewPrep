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
}
let g=new Graph();
g.addVertex("Paris");
g.addVertex("Tokyo");
g.addVertex("Mumbai");
g.addVertex("Chennai");
g.addEdge("Paris","Mumbai");
g.addEdge("Paris","Chennai");
g.addEdge("Paris","Hawaii");
g.removeVertex("Paris")
console.log(g.adjacencyList);