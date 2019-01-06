//Naive solution (O(n**n))
// let frequencyNum=(arr1,arr2)=>{
// if(arr1.length != arr2.length )
// return false;   
// for(let o of arr1)
// {
//     let count=arr2.findIndex((el)=>{
//         return (o*o)==el 
//     });
//     if(count>=0)
//     arr2.splice(count,1)
//     else return false
// }    
// return true;
// }
// console.log(frequencyNum([1,2,2],[1,4,4]));
// console.log(frequencyNum([1,2],[2,4]));

//Frequency pattern (O(n))

let frequencyNum=(arr1,arr2)=>{
    if(arr1.length!==arr2.length)
    return false;
    let frequencyNum1={};
    let frequencyNum2={};

    for(let val of arr1)
    {
        frequencyNum1[val]=(frequencyNum1[val] || 0) + 1;
    }
    for(let val of arr2)
    {
        frequencyNum2[val]=(frequencyNum2[val] || 0) + 1;
    }
    
    for(let key in frequencyNum1)
    {
        if( !(key**2 in frequencyNum2) || (frequencyNum2[key]!=frequencyNum1[key**2] ) )
        return false
    }
    return true
}


console.log(frequencyNum([1,2,2],[1,4,4,4]));