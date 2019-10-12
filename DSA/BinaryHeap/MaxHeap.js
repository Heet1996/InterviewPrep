class MaxHeap
{
    constructor()
    {
        this.values=[];
    }
    bubbleup(pi,i)
    {   if(i<3)
        pi=0;
        if(this.values[pi]>=this.values[i])
        return ;
        let temp=this.values[pi];
        this.values[pi]=this.values[i];
        this.values[i]=temp;
        return this.bubbleup(Math.floor((pi-1)/2),pi)
    }
    insert(val)
    {
        this.values.push(val);
        let i=this.values.length-1;
        let pi=Math.floor((i-1)/2);
        if(i<3)
        pi=0;
        if(this.values[pi]<this.values[i])
        this.bubbleup(pi,i)
        return ; 
    }
    bubbleDown(p,c1,c2)
    {
        if(this.values[c1]>this.values[p])
        {[this.values[c1],this.values[p]]=[this.values[p],this.values[c1]]
          return this.bubbleDown(c1,2*c1+1,2*c1+2)  
        }
        else if(this.values[c2]>this.values[p])
                { [this.values[c2],this.values[p]]=[this.values[p],this.values[c2]]
                    return this.bubbleDown(c2,2*c2+1,2*c2+2)  
                }

        return ;        

    }
    removeMax()
    {
        let max=this.values[0];
        this.values[0]=this.values[this.values.length-1];
        this.values=this.values.slice(0,this.values.length-1);
        let c1=1;
        let c2=2;
        if(this.values[0]<this.values[c1] || this.values[0]<this.values[c2] )
        {
            this.bubbleDown(0,c1,c2);
        }
        
        return max;
    }
}

let heap=new MaxHeap();
heap.insert(4);
heap.insert(3);
heap.insert(2);
heap.insert(1);

console.log(heap);
console.log(heap.removeMax());
console.log(heap);
