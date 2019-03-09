class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    insert(fromNode=this.root, val) {
    
        let newNode=new Node(val);
        if(!this.root) return this.root=newNode;
        if(fromNode.val>val)
        {
            if(fromNode.left==null)
            {
                fromNode.left=newNode;
                return this;
            }
            else this.insert(fromNode.left,val)
        }
        else 
        
        {
            if(fromNode.val==val) return ;
            if(fromNode.right==null)
            {
                fromNode.right=newNode;
                return this;
            }
            else this.insert(fromNode.right,val)
        }
    }
        find(fromNode=this.root,val)
    {   
        if(fromNode==null) return;
        if(this.root.val==val || fromNode.val==val) return val;
        
        if(fromNode.val>val)
        return this.find(fromNode.left,val);
        
        else return this.find(fromNode.right,val)

        
    }
}

let bst = new BST();
bst.insert(bst.root,3);
bst.insert(bst.root,4);
bst.insert(bst.root,4);
console.log(bst); 

