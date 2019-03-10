let BinaryTree=require('../BinaryTree/BinaryTree');

class DFS extends BinaryTree
{
    inorder(fromNode=this.root,values=[])
    {    values=[...values];   
         if((fromNode.left && fromNode.right)) return;
         values.push(fromNode.val);
         if(fromNode.left) this.inorder(fromNode.left,values)
         if(fromNode.right) this.inorder(fromNode.right,values)

    }   
}
let dfs=new DFS();
dfs.insert(dfs.root,3);
dfs.insert(dfs.root,4);
dfs.insert(dfs.root,5);
dfs.insert(dfs.root,6);

console.log(dfs.inorder(dfs.root));