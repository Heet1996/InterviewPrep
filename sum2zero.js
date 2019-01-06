let sum2zero=(arr)=>{
    let left=0;
    let right=arr.length-1;
    while(left<right)
    {
        let sum=arr[left]+arr[right];
        if(sum==0)
        return [arr[left],arr[right]]
        if(sum>0)
        right-=1
        else left+=1
    }
    return "Not found"
}

console.log(sum2zero([-4,-2,0,1,5]));
