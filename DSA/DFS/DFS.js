let BinaryTree=require('../BinaryTree/BinaryTree');

class DFS extends BinaryTree
{   
    preorder(fromNode=this.root,values=[])
    {    
        
        if(fromNode==null) return values;
        values.push(fromNode.val)
        if(fromNode.left) { this.preorder(fromNode.left,values) }
        if(fromNode.right) { this.preorder(fromNode.right,values)}
        return values;
    }
    inorder(fromNode=this.root,values=[])
    {
        if(fromNode==null) return values;
        if(fromNode.left) this.inorder(fromNode.left,values)
        values.push(fromNode.val);
        if(fromNode.right) this.inorder(fromNode.right,values);
        return values;
    }   
}
let dfs=new DFS();
dfs.insert(dfs.root,3);
dfs.insert(dfs.root,4);
dfs.insert(dfs.root,5);
dfs.insert(dfs.root,6);

// console.log(dfs.preorder());
console.log(dfs.inorder());