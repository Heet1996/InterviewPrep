function findLongestSubstring(str){
    let max=0;
    let obj={};
    let count=0;
    for(let i=0;i<str.length;i++)
    {   let c=str.charAt(i);
        if(!obj[c])
        {
            obj[c]=i+1;
            count+=1;
        }
        else {
            i=obj[c];
            continue;
        }
        if(count>max)
        max=count;
    
    }
    
    return obj;
  }

  console.log(findLongestSubstring('thisisawesome'));