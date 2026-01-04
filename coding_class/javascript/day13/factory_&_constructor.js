let student1 = {
    name:"prakash",
    gender:"male",
    birthyear:2003,

    calculateAge(){
        console.log(this)
        return 2025 - this.birthyear;
    }

}
console.log(student1.calculateAge())


let student2 = {
    name:"arif",
    gender:"male",
    birthyear:2001,

    calculateAge(){
        console.log(this)
        return 2025 - this.birthyear;
    }

}
console.log(student2.calculateAge())

let student3 = {
    name:"adil",
    gender:"male",
    birthyear:2005,

    calculateAge(){
        console.log(this)
        return 2025 - this.birthyear;
    }

}
console.log(student3.calculateAge())

// factory function => is a function which return a new object

function createPerson(name , gender , birthyear){
    //returning a object
    return {
        name:name ,
        gender:gender,
        birthyear:birthyear,

        calculateAge(){
            return 2025 - this.birthyear;
    }

    }
}

let s1 = createPerson("chandra" , "male" , 2014)
console.log(s1.calculateAge())

let s2 = createPerson("tata raj" ,"male" , 2000)
console.log(s2.calculateAge())


function user(name ,age){
    return {
        name:name,
        age:age,
    greet(){
        console.log(`Hello! my name is ${this.name} and I am ${this.age} years old`)
    }
    }
}

let out = user("raja" , 30)
console.log(out.greet())


// constuctor function
//1. function name should start with 
//Examples => new Promise() , new URL() , new Date()

function User(name , age){
    console.log(this)
    this.name=name,
    this.age=age,
    this.sayhello = function(){
        console.log(`Hello! my name is ${name} and I am ${age} years old`)
    }
}

let c1 =new User("Rohit" ,42)
console.log(c1)
console.log(c1.sayhello())
