let sum2zero=(arr)=>{
    let left=0;
    let right=arr.length-1;
    let coll=[];
    while(left<right)
    {
        let sum=arr[left]+arr[right];
        if(sum==0)
        coll.push([arr[left],arr[right]]);
        if(sum>0)
        right-=1
        else left+=1
    }
    return coll

}

console.log(sum2zero([1,2,3,4,5]));
