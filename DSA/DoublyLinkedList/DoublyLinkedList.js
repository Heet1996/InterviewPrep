
class Node
{
    constructor(value)
    {
        this.value=value;
        this.prev=null;
        this.next=null;
    }
}
class DoublyLinkedList
{
    constructor()
    {
        this.head=this.tail=null;
        this.length=0;
    }
    push(val)
    {   let n=new Node(val);
        if(!this.head)
        {
            n.prev=n.next=null;
            this.head=this.tail=n;
        }
        else{
            this.tail.next=n;
            n.prev=this.tail;
            n.next=null;
            this.tail=n;

        }
        this.length+=1;
    }
    pop()
    {
        if(!this.head) return;
        
        if(this.head==this.tail)
        this.head=this.tail=null;
        else{
            
            let temp=this.tail.prev;
            this.tail.prev=null;
            this.tail=temp;
            this.tail.next=null;
        }
        this.length-=1;
        return this;
    }
    traverse()
    {
        let temp=this.head;
        while(temp)
        {
         console.log(temp.value);   
         temp=temp.next;   
        }
    }
    //Shifting head position 
    shift()
    {
        if(!this.head) return undefined;
        let temp=this.head.next;
        this.head.next=null;
        this.head=temp;
        temp.prev=null;
        this.length-=1;
        return this.head;
    }
    //Adding new at head position
    unshift(val)
    {   let n=new Node(val);
        if(!this.length)
        this.head=this.tail=n;
        else{
           
           n.next=this.head;
           this.head.prev=n;
           this.head=n;
        }
        this.length+=1;
        return this.head;
    }
    //get the val at some pos
    get(pos)
    {
        if(!this.length || this.length<=pos || pos<0) return undefined;
        let temp=this.head;
        while(pos)
        {   temp=temp.next;
            --pos;
        }
        return temp;
    }
    //set val at pos
    set(val,pos){
        if(!this.get(pos)) return false;
        if(pos==this.length) return this.push(val);
        let temp=this.get(pos);
        temp.value=val;
        return this;
    }
    //insert a node at some pos
    insert(val,pos)
    {   if(pos>this.length || pos<0) return undefined; 
        if(pos==this.length) return this.push(val);
        if(pos==0) return this.unshift(val);
        let n=new Node(val);
        let temp=this.get(pos);
        n.next=temp;
        n.prev=temp.prev;
        temp.prev=n;
        n.prev.next=n;
        this.length+=1;
        return this; 
    }
}
let doubly=new DoublyLinkedList();

doubly.push(3);
doubly.push(4);
doubly.push(5);

doubly.shift();
doubly.unshift(3);
doubly.set(6,2);
doubly.insert(9,4);
console.log(doubly.traverse());

