class Node
{
    constructor(val,priority)
    {
        this.value=val;
        this.priority=priority
    }

}
class PriorityQueue
{
    constructor()
    {
        this.values=[];
    }
    bubbleup(p=0,c)
    {
        [this.values[p],this.values[c]]=[this.values[c],this.values[p]];
        c=p;
        p=Math.floor((c-1)/2);
        if(p<0);
        p=0;
        if(this.values[p].priority>this.values[c].priority)
        this.bubbleup(p,c)
    }
    enqueue(val,priority)
    {
        let node=new Node(val,priority);
        this.values.push(node);
        let c=this.values.length-1;
        let p=Math.floor((c-1)/2);
        if(p<0)
        p=0
        if(this.values[p].priority>this.values[c].priority)
        this.bubbleup(p,c)
        return;
    }
    bubbledown(p,c1,c2)
    {   if(c2>=this.values.length || c1>=this.values.length) return;
        if((this.values[p].priority>this.values[c1].priority) && (this.values[c1].priority<this.values[c2].priority) )
        {
            [this.values[p],this.values[c1]]=[this.values[c1],this.values[p]];
            p=c1;
            c1=2*p+1;
            c2=2*p+2;
            return this.bubbledown(p,c1,c2); 
        }
        if(this.values[p].priority>this.values[c2].priority)
        {
            [this.values[p],this.values[c2]]=[this.values[c2],this.values[p]];
            p=c2;
            c1=2*p+1;
            c2=2*p+2;
            return this.bubbledown(p,c1,c2);
        }
        

    }
    dequeue()
    {
        let node=this.values[0];
        this.values[0]=this.values[this.values.length-1];
        this.values=this.values.slice(0,this.values.length-1);
        if(this.values[0].priority>this.values[1].priority || this.values[0].priority>this.values[2].priority)
        this.bubbledown(0,1,2)
        return node;
    }
}

let queue=new PriorityQueue();
queue.enqueue("Hooli",4);
queue.enqueue("Google",2);
queue.enqueue("Pied Piper",1);
queue.enqueue("Facebook",3);
queue.enqueue("Barclays",7);
console.log(queue);
console.log(queue.dequeue());
console.log(queue);