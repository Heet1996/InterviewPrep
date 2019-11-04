class PriorityQ
{
    constructor()
    {   
        //queue:[{value,distance},{value,distance}]
        this.queue=[];
    }
    enqueue(v,d)
    {   
        if(this.queue.length==0) this.queue.push({value:v,distance:d});
        else{
            let flag=1;   
            this.queue.map((obj)=>
                {   
                if(obj.value===v) 
                    { 
                        obj.distance=d;
                        flag=0;
                    }
                    
                    return obj;  
                }   
            );
            if(flag) this.queue.push({value:v,distance:d});    
        }
        
        this.sort();
    }
    dequeue()
    {
        return this.queue.shift();
    }
    sort()
    {
        this.queue.sort((a,b)=>a.distance-b.distance);
    }
}

class Graph
{
    constructor()
    {   //adjacencyList={v1:[[v2,w],[v3,w]],v2:[v1,w]}
        this.adjacencyList={};

    }
    addVertex(v)
    {
        if(this.adjacencyList[v]) return;
        this.adjacencyList[v]=[];
    }
    addEdge(v1,v2,w)
    {   
        if(v1==v2) return;
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return;
        this.adjacencyList[v1].push([v2,w]);
        this.adjacencyList[v2].push([v1,w]);

    }
}
class Dijkstras extends Graph
{
    constructor()
    {   
        super();
        this.q=new PriorityQ();
        this.previous={};
        this.visited={};
        this.distance={};
    }
    intialization()
    {
        for(let key in this.adjacencyList)
        {   

            this.q.enqueue(key,10000);
            this.distance[key]=10000;
            this.previous[key]=null;
            
        }

    }

    traverse(start,end)
    {   
        this.intialization();
        this.q.enqueue(start,0);
        this.distance[start]=0;
        while(this.q.queue.length>0)
        {
            //1. Take the least priority
            let node=this.q.dequeue();     
            //2.Push into visited array
            this.visited[node.value]=true;
            //4.Traverse the adjacency list
            this.adjacencyList[node.value].forEach(element => {
                
                if(!this.visited[element[0]])
                {   //4.a. Calculate the total distance from start node to element[0]
                    let dis=element[1]+this.distance[node.value];
                    
                    //4.b. Check if it is less than previous distance
                    if(dis<this.distance[element[0]])
                    {
                        //4.c Update the distance to queue
                        this.q.enqueue(element[0],dis);
                        //4.d Update the distance to distance object
                        this.distance[element[0]]=dis;
                        //4.e  Update the previous array
                        this.previous[element[0]]=node.value;
                    }

                }   
            });

            //3.If it's the last node then break
            if(node.value==end) break;
        }

        return this.previous;

    }

}


let dGraph=new Dijkstras();
dGraph.addVertex("a");
dGraph.addVertex("b");
dGraph.addVertex("c");


dGraph.addEdge("a","b",3);
dGraph.addEdge("a","c",0);
dGraph.addEdge("c","b",2);


console.log(dGraph.traverse("a","b"));
