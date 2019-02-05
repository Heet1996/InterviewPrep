let mergeArray=(arr1,arr2)=>{
        let i=0,j=0,r=0;
        let arr=[];
        while(i<arr1.length && j<arr2.length)
        {
            if(arr1[i]>arr2[j])
            {
                arr[r]=arr2[j];
                j++;
            }
            else{
                arr[r]=arr1[i];
                i++;
            }
            r++;
        }
        while(i<arr1.length)
        {
            arr[r]=arr1[i];
            r++;
            i++;
        }
        while(j<arr2.length)
        {
            arr[r]=arr2[j];
            r++;
            j++;
        }
        return arr;
     
}
mergeSort(arr)
{
    if(arr.length<=1)
    return arr1;
    let mid=Math.floor(arr.length/2);
    let l=mergeSort(0,mid);
    let r=mergeSort(mid+1,arr.length-1)
}
console.log(mergeArray([1,3,5,7],[2,6,9]));