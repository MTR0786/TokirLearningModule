function binary_search3(arr,k){
    n=arr.length
    let low=0
    let high=n-1
    
    while (low<=high){
        let mid=low+Math.floor((high-low)/2)
        if (arr[mid]==k){
            return mid
        }
        if (arr[mid]<k){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    return -1
}

const a=[2,5,6,8,9,15,28,36]
console.log(binary_search3(a,6))

