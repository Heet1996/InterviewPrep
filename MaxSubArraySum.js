let maxSubArraySum=(arr,n)=>{
    let max=0;
    let temp=0;
    for(let i=0;i<n;i++)
    max+=arr[i];
    temp=max;
    for(let i=n;i<arr.length;i++)
    {
        temp=temp-arr[i-n]+arr[i];
        if(temp>max)
        max=temp;
    }
    return max;

}
console.log(maxSubArraySum([2,32,3,4,5],3));