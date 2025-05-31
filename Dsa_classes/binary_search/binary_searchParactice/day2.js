// 1)Search in sorted and rotated array

function Binary_search_rotated(arr,key){
    low=0
    high=arr.length-1
 while(low<=high){
    mid=Math.floor(low + (high-low)/2)

    // check mid element is key-
    if (arr[mid]==key){
        return mid
    }
    
    // check left half is sorted--
    if(arr[mid]>=arr[low]){

        //check elemt in right side
        if(arr[low]<=key && key<arr[mid]){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }

    // check right half is sorted--
    if(arr[mid]<arr[high]){
        if(arr[high]>=key && arr[mid]<key){
           low=mid+1
        }
    else{
         high=mid-1
    }
    }
}
return -1
}

// console.log(Binary_search_rotated([25,28,30,2,5,6,7,9,12,15,16,18,19,20],25))


//2)finding the peak:- peak meas that number is grater than its neghbourhood numbers,
function peak_number(arr){
    n=arr.length
    if(n==1)
        return 0
    if(arr[0]>arr[1])
        return 0
    if (arr[n-1]>arr[n-2]){
        return n-1
    }
    low=1
    high=n-2

    while(low<=high){
        mid=low+Math.floor((high-low)/2)
        if (arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            return mid
        }
        else if(arr[mid]>arr[mid-1]){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    return -1
}


console.log(peak_number([1,2,3,4,5,5,52,3,2]))

// Shop and Soap:- q quires to know that how many soap available in the money M
function Shop_soap(arr,num){
    low=0
    high=arr.length -1
    res=arr.length
    while(low<=high){
        mid=low+Math.floor((high=low)/2)
        if(arr[mid]>=num){
            high=mid-1
            res=mid
        }
    else{
        low=mid+1
    }
    }
    return res
}

console.log(Shop_soap([2,5,6,7,8,9,12,15,18,20,25,29,30],20))