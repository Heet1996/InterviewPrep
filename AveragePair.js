function averagePair(arr,n){
    let l=0;
    let r=arr.length-1;
    while(l<r)
    {   if((arr[l]+arr[r])/2 == n)
          return true
        if((arr[l]+arr[r])/2 > n)
        r=r-1;
        else
        l=l+1
        
    }
    return false
  }

  