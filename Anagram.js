let isAnagram=(str1,str2)=>{
    if(str1.length!=str2.length)
    return false;
    let frequencyNum={};
    
    for(let val of str1)
     frequencyNum[val]=(frequencyNum[val] || 0) +1;

    for(let val of str2)
    {   
        if(val in frequencyNum)
        if(frequencyNum[val]>0)
        frequencyNum[val]-=1;
        else return false;
        else return false;

    } 
    return true;
    
}

console.log(isAnagram("aa","ab"));