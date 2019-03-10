let BinaryTree=require('../BinaryTree/BinaryTree');

class BFS extends BinaryTree {
    
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