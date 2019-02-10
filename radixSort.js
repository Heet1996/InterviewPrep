let getDigit=(n,i)=>Math.floor(n/Math.pow(10,i))%10;

let digitCount=(n)=>{
    let count=0;
    while(n)
    {
        n=Math.floor(n/10);
        count+=1;
    }
    return count;
}
let mostDigits=(arr)=>arr.map((val)=>digitCount(val)).reduce((prev,curr)=>Math.max(prev,curr));
    
let radixSort=(arr)=>{
    let n=mostDigits(arr);
    for(let i=0;i<n;i++)
    {   let digitBuckets=Array.from({length:10},()=>[]);
        for(let j=0;j<arr.length;j++)
        {
            let n= getDigit(arr[j],i);
            digitBuckets[n].push(arr[j]);

        }
        arr=[].concat(...digitBuckets);
    }
    return arr;
}
console.log(radixSort([121,12,124,1234]));
