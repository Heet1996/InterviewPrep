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
    {   let temp=this.head;
        while(pos && temp.next)
        {
            temp=temp.next;
            pos--;
        }
        if(pos) return null;
        return temp.value;
    }
}
let list=new SinglyLinkedList();
list.push(3);


console.log(list.get(2));