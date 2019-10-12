class HashTable
{
    constructor(size=53)
    {
        this.keys=new Array(size);
    }
    get(key)
    {
        let index=this._hash(key);
        if(index) 
        {
            let arr=this.keys[index];
            let o={};
            arr.forEach(el => {
                 if(Object.keys(el)[0]==key) {o=el}
            });
            return o;
        }

    }
    set(key,value)
    {   
        let index=this._hash(key);
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
     return total;    
    }

}
let hash=new HashTable();
hash.set('pink','#ddsfs');
hash.set('pink','#ddsss');
hash.set('pik','#desss');
console.log(hash.get('pik'));