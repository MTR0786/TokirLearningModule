let arr = ["A", "Good", "Problem"]

//1) find sum of length of strings which length is odd

let arrN = function(el){
    return el.length % 2 != 0;

}

let fit = function(acc,el){
    return acc + el.length
}

let res=arr.filter(arrN).reduce(fit,0)

console.log(res)