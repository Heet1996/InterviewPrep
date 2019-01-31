let bubbleSort=(arr)=>{
    for(let i=arr.length;i>0;i--)
    {   
        let flag=0;
        for(let j=0;j<i-1;j++)
        {   
            if(arr[j]>arr[j+1])
            {   let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=1;
            }
        }
        
    }
    return arr;
}

console.log(bubbleSort([2,9]));