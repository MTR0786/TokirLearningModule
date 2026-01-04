//Object Methods

const person = {
    name:"arif",
    age:25,
    
//     // Object methids => Function inside object

    greet: function(){
        console.log("Arif says, Hello!")
    }
};

// person.greet()
person.bye = function(){
    console.log("bye,i'm here")

}

// console.log(person);
// person.bye();


// Inbuild object methods
// console.log(Object.entries(person))

let car = {
    make:"suzuki",
    model:"Brezza",
    year:2023,
}

//Object.keys() => return an array of keys

// console.log(Object.keys(car))
// console.log(Object.values(car))


//Object.keys(...) and Object.values(...)

let scores = { savan:77, akriti:89 , rajan:90 , arif:86 , dhurva:45}

//return a array of names whose scores is grater than 85

let res = Object.values(scores).filter((name) => name>85)
// console.log(res)

let res2 = Object.keys(scores).filter((name) => scores[name]>85)
// console.log(res2)

let total = Object.values(scores).reduce((acc,el) => acc+el,0)
// console.log(total)



let target = {a:1 , b:2}
let sourse = {c:3 ,d:5}
let sourse2 = {e:3,b:4}

// Object.assign(...)
let merged = Object.assign(target,sourse,sourse2)
// console.log(merged)

// Object.freeze() => onece it runs you are unable to any change like delete , add , relace

let obj ={
    name:"arif",
    age:21

}

// Object.freeze(obj)
// obj.name = 'adil'
// console.log(obj)
// obj.place = "Bokaro"

//Object.seal(..) => in Object seal we an change the value of atributes but can't add or delete any attributes(variables)
Object.seal(obj)

obj.name ='raza'
obj.place = "Bokaro"
delete obj.name;

// console.log(obj)

