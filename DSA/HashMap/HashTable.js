class HashTable
{
    constructor(size=3)
    {
        this.keys=new Array(size);
    }
    get(key)
    {   let index=this._hash(key);
        if(index) 
        {
            let arr=this.keys[index];
            let o={};
            arr.forEach(el => {
                 if(Object.keys(el)[0]==key) {o=el}
            });
            return Object.values(o);
        }

    }
    set(key,value)
    {   
        let index=0;
        try{
        index=this._hash(key);
        }
        catch(e)
        {   
            throw e;
        }
        this.keys[index].push({[key]:value});
        return this.keys;
    }
     _hash(key)
    {
     const WEIRD_PRIME =31;
     let total=0;
     for(let i=0;i<key.length;i++)
        {   
            total=(total*WEIRD_PRIME+key.charCodeAt(i))%this.keys.length;
        }
     if(!this.keys[total])   
     this.keys[total]=new Array();
     for (const el in this.keys[total]) {
         
            if(Object.keys(this.keys[total][el])[0]==key)
                throw new Error(` ${key} is repeated more than once`);
     }   
     
     return total;    
    }

}
let hash=new HashTable();
try {
    hash.set('pink','#ddsfs');
    hash.set('blue','#ddsss');
    hash.set('pink','#fesgs');
    hash.set('orange','#edslq');
    hash.set('yellow','#kjdsf');    
} catch (error) {
    console.log(error.message);
}

