let pivot=(arr,l=0,r=arr.length-1)=>{
    let pivotIndex=l;
    for(let i=l+1;i<=r;i++)
    {
        if(arr[i]<arr[l])
        {
            //swap and increase pivot
            pivotIndex+=1;
            let temp=arr[i];
            arr[i]=arr[pivotIndex];
            arr[pivotIndex]=temp;
        }

    }
    let temp=arr[l];
    arr[l]=arr[pivotIndex];
    arr[pivotIndex]=temp;
    return pivotIndex;
}
let quickSort=(arr,l=0,r=arr.length-1)=>{
    if(l<r) 
    {
        let pivotI=pivot(arr,l,r);
        quickSort(arr,l,pivotI-1);
        quickSort(arr,pivotI+1,r);
    } 
    return arr;
}
console.log(quickSort([4,2,1,5,7,8,6,3]));