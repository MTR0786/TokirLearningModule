// recurtion is a powerful programming technique where a function is called its self in a order to solve a problem.

// problem 1
// function findsum(x){
//     if (x>0){
//         return (2*findsum(x-1)) + 2
//     }
//     else{
//         return 1
//     }
// }

// console.log(findsum(3))


// problem 2
// function prob2(n){
//     if (n==0){
//         return 0
//     }
//     else{
//         prob2(n-1)
//         console.log(n, )
//     }
// }
// console.log(prob2(3))

// problem 2_1

// function prob2_1(n){
//     if (n==0){
//         return 0
//     }
//     else{
//         console.log(n)
//         prob2_1(n-1)

//     }
// }
// console.log(prob3(3))


function prob3(n){
    if (n==0){
        return 0
    }
    else{
        prob3(n-1)
        console.log(n)
        prob3(n-1)

    }
}
console.log(prob3(4))

function hani(x){
    if (x<1){
        return 1
    }
    else{
        return hani(x-1) + bani(x)
    }
}

function bani(x){
    if (x<2){
        return 1
    }
    else{
        return hani(x-1) + x/2
    }
}

console.log(hani(3))