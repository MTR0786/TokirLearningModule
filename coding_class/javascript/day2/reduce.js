// sum of array , products of elements, total price of product

// let arr = [1,2,3,4,5];
// let acc = 0;

// for(let i=0; i<arr.length;i++){
//     acc=acc+arr[i]
// }
// console.log(acc)

//reduce - HOf - arrays - similar to foreach, map and filter but with small

let arr = [10,2,3,4,5]

let out = arr.reduce(function(acc,el,i,arr){
    return acc+el;
},20)

console.log(out)

// 2 casses >> 1. with intial value 2.without the intial value

//2.without the intial value >> it taking default initial value
// intial value >> 1st elment in the array == 10

// 1st iteration >> acc =10, el= 2 acc+el= 10+2=12 acc=10
// 2st iteration >> acc =12, el= 3 acc+el= 12+3=15 acc=15
// 3st iteration >> acc =15, el= 4 acc+el= 15+4=19 acc=19
// 4st iteration >> acc =19, el= 5 acc+el= 19+5=24 acc=24

// 1. with intial value
// 1st iteration >> acc =20, el= 10 acc+el= 20+10=30 acc=30
// 2st iteration >> acc =30, el= 2 acc+el= 30+2=32 acc=32
// 4st iteration >> acc =32, el= 3 acc+el= 32+3=35 acc=35
// 3st iteration >> acc =35, el= 4 acc+el= 35+4=19 acc=39
// 5st iteration >> acc =39, el= 5 acc+el= 39+5=44 acc=44



const products=[
    {name:"laptop",price:10000,instock:true},
    {name:"phone",price:1000,instock:false},
    {name:"Tablet",price:5000,instock:true},
    {name:"Tablet",price:3000,instock:true}
];
let total=products.reduce(function(acc,el,i,arr){
    return acc+ Number(el.price);
},0)

console.log(total)

