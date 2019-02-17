class Node
{
    constructor(val)
    {
        this.val=val;
        this.next=null;
    }

}
class Stack
{
    constructor()
    {
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val)
    {   let n=new Node(val);
        if(!this.first)
        {
            this.first=this.last=n;
        }
        else{
            
            n.next=this.first;
            this.first=n;

        }
        return ++this.size;
    }
    pop()
    {
        if(!this.first) return undefined;
        if(this.size==1)
        this.first=this.last=null;
        else{
            let temp=this.first.next;
            this.first.next=null;
            this.first=temp;
        }
        return --this.size;
    }
    traverse()
    {
        let temp=this.first;
        while(temp)
        {
            console.log(temp.val);
            temp=temp.next;
        }

    }
}

let s=new Stack();
s.push(3);
s.push(4);

s.pop();
s.pop();
s.push(5);
s.push(6);
s.traverse();