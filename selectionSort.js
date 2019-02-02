let swap=(m,n)=>{
    let temp=m;
    m=n;
    n=temp;
}
let selectionSort=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {   let pos=i;
        let min=arr[i];
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[j]<min)
            {
                min=arr[j];
                pos=j
            }
        }
        swap(arr[pos],arr[i]);
        
    }
    return arr;
}

console.log(selectionSort([7,5,8,1,4]));