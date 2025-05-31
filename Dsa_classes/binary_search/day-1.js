// brute force approch
// function binary_search(arr,low,high,key){
//     while( low<=high){
//         let mid = Math.floor((low+high)/2)
//         if(key==arr[mid]){
//             return mid
//         }
//          if(key<arr[mid]){
//             high=mid-1
//          }  
//          else{
//             low=mid+1
//          }

//         }
//     return -1

// }

// const arr=[3,1,2,9,7,6,4,5,8,13,11,10]
// const a=arr.sort((a,b)=> a-b )
// console.log(a)
// console.log(binary_search(a,0,a.length-1,13))


// By using recurtion
function Binary_search(arr,low, high,key){
if (low>high){
    return -1
}
mid = Math.floor((low+high)/2)
if (key==arr[mid]){
    return mid
}
if (key<arr[mid]){
   return Binary_search(arr,low,mid-1,key)
}
else{
    return Binary_search(arr,mid+1,high,key)
}
return -1
}
const arr=[3,1,2,9,7,6,4,5,8,13,11,10]
const a=arr.sort((a,b)=> a-b )
console.log(a)
console.log(Binary_search(a,0,a.length-1,4))
console.log(Binary_search(a,0,a.length-1,13))
console.log(Binary_search(a,0,a.length-1,1))
console.log(Binary_search(a,0,a.length-1,18))