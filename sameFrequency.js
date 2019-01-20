let sameFrequency=(n1,n2)=>{
    let freq1={};
    let flag=true;
    while(Math.floor(n1)>0)
    {
        freq1[n1%10]=(freq1[n1%10] || 0) + 1;
        n1=Math.floor(n1/10);
    }
    while(Math.floor(n2)>0)
    {
        if(freq1[n2%10]>0)
        freq1[n2%10]-=1;
        else flag=false;
        n2=Math.floor(n2/10);
    }
    if(flag)
    for (let i in freq1) {
        if(freq1[i]!=0)
            flag=false;
    }
    return flag;
}
console.log(sameFrequency(131,31));
