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
        if(temp.next==null)
        {
            this.head=null;
            this.tail=null;
            this.length=0;
            return this;
        }
        while(temp.next!=this.tail)
            temp=temp.next;
        temp.next=null;    
        this.tail=temp;
        this.length-=1;
        return this;

    }

}
let list=new SinglyLinkedList();
list.push(3);
list.push(4);
list.push(5);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());