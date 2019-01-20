let areThereDuplicates=function (...args){
    let freq={};
    let flag=true;
    for (let i of args) 
        {freq[i]=(freq[i] || 0) +1;
         if(freq[i]>1)
         return false;   
        }    

        return flag;
}
console.log(areThereDuplicates(1,1,3,4,5));
