let pivot=(arr)=>{
    let pivotIndex=0;
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i]<arr[0])
        {
            //swap and increase pivot
            pivotIndex+=1;
            let temp=arr[i];
            arr[i]=arr[pivotIndex];
            arr[pivotIndex]=temp;
        }

    }
    return pivotIndex;
}

console.log(pivot([5,2,7,8,1]));