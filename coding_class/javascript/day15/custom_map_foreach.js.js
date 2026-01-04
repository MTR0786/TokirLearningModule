// forEach , map ,filter(HW)

let nums = [1,2,5,6]

//1.
// original forEach
nums.forEach(function(el,i,arr){
    console.log(el)
})

// custom forEach
Array.prototype.customForEach = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

nums.customForEach(function(el,i,arr){
    console.log(el,i,arr)
})

//2. 
//original map
let res =nums.map(function(el,i,arr){
    return el;
})

console.log(res)

//custom map
Array.prototype.CustomMap = function(callback){
    let arr = []
    for(let i=0;i<this.length;i++){
        arr.push(callback(this[i],i,this))
        // arr.append(this[i])
    }
    return arr
}
let out =nums.map(function(el,i,arr){
    return el;
})

console.log(out)