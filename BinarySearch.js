function binarySearch(arr,n,l=0,r=arr.length-1){
    let mid=Math.floor((l+r)/2);
    if(l>r || r<l) return -1;
    if(arr[mid]==n) return mid;
    if(arr[mid]<n) return binarySearch(arr,n,mid+1,r)
    if(arr[mid]>n) return binarySearch(arr,n,l,mid-1)
    
   
}

console.log(binarySearch([1,2,3,4,5],5));