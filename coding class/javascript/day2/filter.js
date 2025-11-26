// 1) how get even number from array
//using foreach

let numbers =[2,4,6,8,10,13,7,5,3]

let even=[];

numbers.forEach(function(el,i,arr){
    // console.log(el,i)
    if(el%2==0){
         even.push(el);
    }
})

// console.log(even)


// using filter
//filer - return and array , same syntax as map and foreach

let evenNum =function (ele){
    return ele%2 == 0;

}

let even2 = numbers.filter(function(el,i,arr){
    return el%2==0;
});
// console.log(even2)


//array of objects
const users=[
    {name:"john",age:25},
    {name:"raza",age:22},
    {name:"arif",age:20},
    {name:"adil",age:35}
]

let adults = users.filter(function(el,i,arr){
    return el.age>=25;
});

// console.log(adults);

const products=[
    {name:"laptop",price:10000,instock:true},
    {name:"phone",price:1000,instock:false},
    {name:"Tablet",price:5000,instock:true},
    {name:"Tablet",price:3000,instock:true}
]
 let myproduct = products.filter(function(el,i,arr){
    return el.price<=4000 && el.instock;
 });

 console.log(myproduct)