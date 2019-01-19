
let countUnique=(arr)=>{
    let l=0;
    let h=1;
    for (const key in arr) {
        if(arr[l]!=arr[h] && h<arr.length)
        {   l=l+1;
            arr[l]=arr[h];
        }
        if(h<arr.length)
        h=h+1;
    }

    return l+1
}

console.log(countUnique([1,2,4,5,6,6,6,6,6]));