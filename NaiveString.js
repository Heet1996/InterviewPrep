let NaiveString=(str,ptrn)=>{
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        let flag=1;
        for(let j=0;j<ptrn.length;j++)
        {
            if(ptrn[j]!=str[i+j])
            {   flag=0;
                break;
            }
            
        }
        if(flag) ++count;
    }
    return count;
}

console.log(NaiveString('oldschoolold','old'));