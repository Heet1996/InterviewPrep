class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree
{
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
}
module.exports=BinaryTree 
