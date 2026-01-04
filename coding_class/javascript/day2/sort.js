let nums = [10,100,4,2,3,6,,8,7]

console.log(nums.sort(comparefn))

// callback_function >> compare
function comparefn(a,b){
    return a-b
}
arr=[2,-5,32,0,25,36]
let  asc = arr.sort(function(a,b){
    return a-b
})
console.log(asc)


let animals = ["cat","elephant","cow","dog","bee","ant"]

let strAsc = animals.sort(function(a,b){
    if(a>b) return 1;
    if(a<b) return -1;
    return 0
})

console.log(strAsc)


let employees = [
    {name:"john", salary:90000, hireDate:"july 1,2010"},
     {name:"aarya", salary:10000, hireDate:"august 15,2017"},
      {name:"arif", salary:150000, hireDate:"may 13,2016"},
       {name:"adil", salary:160000, hireDate:"jun 12 ,2020"},
]

employees.sort(function(a,b){
    return a.salary - b.salary;
})
// console.log(employees)

employees.sort(function(a,b){
    if (a.name>b.name) return 1;
    if (a.name<b.name) return -1;
    return 0;
})
console.log(employees)