// this => inside globle scope => this refers to window object in global scope in browser enviroment.

console.log(this); // window object 
console.log(window)
console.log(window == this)

//"this" inside function

//this inside funtion also refers to window object in non-strict mode
// this inside  function is undefined in stric mode =>  "use strict";
// non- stric mode => undefined i being replace by window object =>

function greet(){
    console.log(this , "inside function");
    console.log(window == this)

}

greet()


// value of "this" inside object method
// "this" inside object methods is refers to nerest parant object

let person3 = {
    name: "ajay",
    age: 20,

    greet2() {
    console.log(this)
    }
}

person3.greet2()