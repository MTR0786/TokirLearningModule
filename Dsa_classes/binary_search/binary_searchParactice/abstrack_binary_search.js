//1) Wood cutter
//>>>>> brute force approch
//  function checkwood(arr,n,k,m){
//     sum=0
//     for(j=0; j<n; j++){
//         if(arr[j]>m){
//             sum+=(arr[j]-m)
//         }
//         return sum>=k 
//     }
    

//     for(i=0; j<Math.max(arr);i++){
//         if( checkwood(n,arr,k,m)){
//             return i
//         }

//     }
//     return "error"
//  }
//  console.log(checkwood(4,[20,15,10,17],7,15))


// >>> from binarry search


function check_wood(n,arr,k,m){
    sum=0
    for(j=0;j<n;j++){
        if(arr[j]>m){
            sum+=arr[j]-m
        }
       
    }
 return sum>=k
}

function maxheight(n,arr,k){
    low=0; high=Math.max(...arr); ans=-1
    while(low<=high){
        m=Math.floor(low+(high-low)/2)
        if(check_wood(n,arr,k,m)){
            ans=m
            low=m+1    // try a higher height
        }
        else{
            high=m-1    // try a lower height
        }
    }
    return ans
}

console.log(maxheight(4,[20,15,10,17],7))



