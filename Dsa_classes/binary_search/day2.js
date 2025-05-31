// 1) find the square root of given number
// function find_sqrt(n){
//     if( n==0 || n==1){
//         return n
//     }
//     for (i=1;i<n;i++){
//         if(i*i==n){
//             return i
//         }
//         if(i*i>n){
//             return i-1
//         }
//     }
//     return -1
// }

/*
function binary_search_sqrt(n){
    if(n==0 || n==1){
        return n
    }
    l=0 , h=n, res=1
    while(l<=h){
    let mid=l+Math.floor((h-l)/2)
    if (mid*mid==n){
        return mid
    }
    if (mid*mid<n){
        l=mid+1
        res=mid
    }
    else{
        h=mid-1
    }
  }  
  return res
}





console.log(binary_search_sqrt(9))
console.log(binary_search_sqrt(12))
console.log(binary_search_sqrt(289))
console.log(binary_search_sqrt(45))
console.log(binary_search_sqrt(64))

*/


function minElementIndex(arr, n){
    low = 0, high = n - 1;
    
    while (low <= high){
    let mid = low + Math.floor((high - low) / 2);
    
    // Check if mid is the minimum element
    if ((mid == 0 || arr[mid] <= arr[mid - 1]) && (mid == n - 1 || arr[mid] <= arr[mid + 1])){
    return mid;
    }
    // Check if the left half is sorted
    if (arr[low] <= arr[mid]) {
    // Minimum must be in the right half
    low = mid + 1;
    } 
    else {
    // Minimum must be in the left half
    high = mid - 1;
        }
    }   
    return -1;
}
let a=[3,4,5,7,9,11,1,2]
console.log(minElementIndex(a,7))