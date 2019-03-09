class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BFS {
    constructor() {
        this.root = null;
    }
    insert(fromNode=this.root,val)
    {
        let newNode=new Node(val);
        if(!this.root) return this.root=newNode;
        let queue=[];
        queue.push(fromNode);
        while(queue)
        {   fromNode=queue.shift(); 
            if(!fromNode.left)
            {
                fromNode.left=newNode;
                break;  
            }
            else queue.push(fromNode.left)
            if(!fromNode.right)
            {
                fromNode.right=newNode;
                break;
            }
            else queue.push(fromNode.right)
            
        }
    }
    traverse(fromNode=this.root)
    {
        let queue=[];
        let visited=[];
        queue.push(fromNode);
        while(queue.length>0)
        {
            fromNode=queue.shift();
            visited.push(fromNode.val);
            if(fromNode.left) queue.push(fromNode.left)
            if(fromNode.right) queue.push(fromNode.right)

        }
        return visited;
    }
}

let bfs=new BFS();
bfs.insert(bfs.root,3);
bfs.insert(bfs.root,4);
bfs.insert(bfs.root,5);
bfs.insert(bfs.root,6);

let val=bfs.traverse(bfs.root);
console.log(val);