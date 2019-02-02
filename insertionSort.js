let insertionSort=(arr)=>{
    for(let i=0;i<arr.length;i++)
    {
        let key=arr[i];
        for(let j=i-1;j>=0;j--)
        {
            if(arr[j]>key)
            {
                arr[j+1]=arr[j];
                arr[j]=key;
            }

        }
        
    }
    return arr;
}
console.log(insertionSort([5,3,1,9,4]));