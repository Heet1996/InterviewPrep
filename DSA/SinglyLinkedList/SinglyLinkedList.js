class Node
{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class SinglyLinkedList
{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val)
    {
        if(this.length==0)
        {   
            this.head=new Node(val);
            this.tail=this.head;
            
        }
        else{
            
            this.tail.next=new Node(val);
            this.tail=this.tail.next;
            
        }
        this.length+=1;
        return this;
    }
    pop()
    {   

        let temp=this.head;
        if(temp==null) return undefined;
        if(temp.next==null)
        {
            this.head=null;
            this.tail=null;
            this.length=0;
            return temp.value;
        }
        while(temp.next!=this.tail)
            temp=temp.next;
        let value=temp.next.value;
        temp.next=null;    
        this.tail=temp;
        this.length-=1;
        return value;

    }
    shift()
    {
        if(this.head===null) return undefined;
        let temp=this.head.next;
        let val=this.head;
        if(temp===null) 
        {   
            this.head=this.tail=null;
            this.length=0;
            return val;
        }
        
        this.head=temp;
        this.length-=1;
        return val;
    }
    unshift(val)
    {
        let node=new Node(val);
        node.next=this.head;
        if(!this.head) this.head=this.tail=node;
        else  this.head=node;
        this.length+=1;
        return this;
    }
    get(pos)
    {   
        if(pos<0 || pos>this.length) return null; 
        let temp=this.head;

        while(pos && temp.next)
        {
            temp=temp.next;
            pos--;
        }
        
        return temp;
    }
    set(pos,val)
    {
        if(!this.get(pos)) return false;
        let temp=this.get(pos);
        temp.value=val;
        return true

    }
    insert(val,pos)
    {
        if(!this.get(pos)) return false;

        if(pos==0)
        {return this.unshift(val)}
        
        if(pos==this.length)
        {return this.push(val)}
        

        let prev=this.get(pos-1);
        let newNode=new Node(val);
        newNode.next=prev.next;
        prev.next=newNode;
        this.length+=1;
        return prev;
    }
    remove(pos)
    {
        if(!this.get(pos)) return false;
        if(pos==0) {this.shift();return true};
        if(pos==this.length-1)
        return this.pop();
            
        
        let temp=this.get(pos-1);
        let curr=temp.next;
        temp.next=curr.next;
        curr.next=null;
        this.length-=1;
        return temp;
    }
    reverse()
    {   if(!this) return null;
        
        let a=null;
        let b=this.head;
        let temp;
        while(b!=null)
        {
            temp=b.next;
            b.next=a;
            a=b;
            b=temp;
        }
        this.tail=this.head;
        this.head=a;
        return this;
    }
    traverse()
    {   this.reverse();
        let temp=this.head;
        while(temp!=null)
        {
            console.log(temp.value);
            temp=temp.next;
        }
    }
}
let list=new SinglyLinkedList();
list.push(3);
list.push(4);



console.log(list.traverse());

