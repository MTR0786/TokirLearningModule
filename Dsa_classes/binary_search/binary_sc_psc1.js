// 1.find index of first occurance of given number
function binarysearch(arr,low,high,key){
    res=-1
    while(low<=high){
       let mid=low+Math.floor((high-low)/2)
       if(arr[mid]==key){
        res=mid
        high=mid-1
       }
       if(arr[mid]>key){
        high=mid-1
       }
       if((arr[mid]<key)){
            low=mid+1
        }
    }
   
    return res
}

const arr=[1,2,3,4,5,7,8,8,8,8,8,8,27,32]
console.log(binarysearch(arr,0,arr.length-1,8))


// find index of last occurance of given number
function binarysearch_2(arr,low,high,key){
    res=-1
    while(low<=high){
       let mid=low+Math.floor((high-low)/2)
       if(arr[mid]==key){
        res=mid
        low=mid+1
       }
       if(arr[mid]>key){
        high=mid-1
       }
       if((arr[mid]<key)){
            low=mid+1
        }
    }
    return res
}

console.log(binarysearch_2(arr,0,arr.length-1,8))

// 3. Find fruency of give number in array
function binary_search_3(arr,low,high,key){
    f=0
    res=-1
    while(low<=high){
       mid=low+Math.floor((high-low)/2)
       if(arr[mid]==key){
        res=mid
        high=mid-1
       } 
       if(arr[mid]>key){
        high=mid-1
       }
       if(arr[mid]<key){
        low=mid+1
       }
    }
    i=res
    while(arr[i]==key){
        f+=1
        i+=1
    }
    return f
}
console.log(binary_search_3(arr,0,arr.length-1,8))


