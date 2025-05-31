// Brute force approch

function binary_search(arr,key){
    let low=0
    let high=arr.length
    while(low<=high){
        let mid= Math.floor((high+low)/2);
        if(arr[mid]==key){
            return mid;
        }
        if(key<arr[mid]){
            high=mid-1
        }
        else{
            low=mid+1
        }

     }
}   

console.log(binary_search([1,2,5,6,9,12,13,15,18,19,20,24,28,29,30],29))

// Using binary search

function binary_search_recurtion(arr,key,low,high){
    if (low>high){
        return -1
    }
    mid= Math.floor(low+(high-low)/2)

    if(key==arr[mid]){
        return mid
    }
    if(key<arr[mid]){
       return binary_search_recurtion(arr,key,low,mid-1)
    }
    else{
        return binary_search_recurtion(arr,key,mid+1,high)
    }

}

console.log(binary_search_recurtion([1,2,5,6,9,12,13,15,18,19,20,24,28,29,30],13,0,15))



// //1) First and last Occurance of an element
function binary_first_occurance(arr,key,low,high){
    res=-1
    while(low<=high){
    
    let mid=Math.floor(low+(high-low)/2);
    if (key==arr[mid]){
        res=mid;
        high=mid-1;   // for last occurance low=mid+1
    }
    if(key<arr[mid]){
        high=mid-1;
    }
    if(key>arr[mid]){
        low=mid+1;
    }
   }
   return res
}
    
    

console.log(binary_first_occurance([2,5,6,6,6,6,8,8,12,13,13,13,13,18,18,18,18,18,18,45,46],13,0,21))


//2)Frecuency of key

function binary_frequency(arr,key){
    // first occurance 
     let low=0
     let high=arr.length-1
    let left=-1
    while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
    if (key==arr[mid]){
        left=mid;
        high=mid-1;   
    }
    if(key<arr[mid]){
        high=mid-1;
    }
    if(key>arr[mid]){
        low=mid+1;
    }
   }
   // last occurance 
     let l=0
    let h=arr.length-1
    let right=-1
   while(l<=h){
    let mid=Math.floor(l+(h-l)/2);
    if (key==arr[mid]){
        right=mid;
        l=mid+1;   
    }
    if(key<arr[mid]){
        h=mid-1;
    }
    if(key>arr[mid]){
        l=mid+1;
    }
   }
   if(left==-1 || right==-1){
    return 0
   }
   else{
    return right-left+1
   }
}
    
    

console.log(binary_frequency([2,5,6,6,6,6,8,8,12,13,13,13,13,18,18,18,18,18,18,45,46],46))