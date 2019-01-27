function maxSubarraySum(arr,n){
    if(arr.length<n) return; 
    let temp=0;
    for(let i=0;i<n;i++)
    temp+=arr[i];
    let max=temp;
    for(let i=n;i<arr.length;i++)
    {
        temp=temp-arr[i-n]+arr[i];
        if(temp>max)
        max=temp;
    }
    return max;

}
console.log(maxSubarraySum([9,2,7,3,1,5,6],6));