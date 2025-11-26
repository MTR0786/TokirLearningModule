let arr=[1,2,3,4,5,6];

// sum of cubes if number is divisible by 3 >> [3,6] >> 27+216 = 243

// 1st method 
let isdivisibleby3 = function(el){
    return el%3==0;
}

let sum = function(acc,el){
    return acc + el**3;
}


let res = arr.filter(isdivisibleby3).reduce(sum)
// console.log(res)

// 2nd method

// let res= arr
//     .filter(function(el){
//         return el%3==0;
//     })
//     .reduce(function(acc,el){
//         return acc + el**3
//     })
// console.log(res)

// let sum_ = arr.reduce(function(acc,el,i,arr){
//     if(el%3==0){
//         return acc + el**3
//     }
// })
// console.log(sum_)