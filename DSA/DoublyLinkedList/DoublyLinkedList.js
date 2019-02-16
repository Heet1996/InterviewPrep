
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
        while(temp!=this.tail)
        temp=temp.next;

    }
}
let doubly=new DoublyLinkedList();

doubly.push(3);
doubly.push(4);
doubly.push(5);
console.log(doubly.pop());

