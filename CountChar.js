let countChar=(str)=>{

    //lowercase the string
    str=str.toLowerCase();
    //Create an empty object
    let obj={};
    //Loop through str
    for(let o of str)
    {   
        if(o.match(/^[a-z0-9]+$/i))
        {   console.log(obj.hasOwnProperty(o));
            if(obj.hasOwnProperty(o))
        {   
            obj[o]+=1;
        }
        else{
            obj[o]=1;
            console.log(o);
        }
        }
    }
    return obj;
}

console.log(countChar('abcda'));
 