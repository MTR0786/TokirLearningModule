// Prototype is a mechanism by which JavaScript objects inherit properties and methods from another object.
//Prototype is an object from which other objects inherit properties and methods in JavaScript.

// Why Prototype Is Important
//1.Enables inheritance
//2.Reduces memory usage
//3.............................Core of JavaScript OOP


//let numberArr = [1,2,9,3]

// console.log(numberArr , typeof(numberArr))
// console.log(numberArr.sort())

// console.log(Array.prototype)
// console.log(numberArr.__proto__)
// console.log(numberArr.__proto__ == Array.prototype)


const car ={
    type: "car",
    wheeks:4
}

const bike ={
    type:"Bike",
    wheels:2,
}

const vehicleMethods = {
    startEngine (){
        console.log(`${this.type} engine started.`)
    },
    stopEngine(){
        console.log(`${this.type} engine Stop.`)
    }
}

//1 . __proto__

car.__proto__ = vehicleMethods;
bike.__proto__ = vehicleMethods;

// console.log(car)
// console.log(bike)

// car.startEngine();
// car.stopEngine();

// bike.startEngine()
// bike.stopEngine()

//2. setprototypeOf(object_name,method_name)

Object.setPrototypeOf(car , vehicleMethods )


//Add prototype in constructor function

function Movie(title , director , releasedate){
        this.title = title,
        this.director = director,
        this.releasedate = releasedate
    
}

Movie.prototype.discribeMovies = function(){
       return `${this.title} is a flim directed by ${this.director} released in ${this.releasedate}`
    
}
Movie.prototype.isRecent=function(){
    if (2025 - this.releasedate <=5){
        return `this movie is recent `
         
    } 
    else{
        return `this movie is not recent `
    }
}

let m1 = new Movie("Incaption" , "Christopher Nolan",2010)
console.log(m1)
console.log(m1.discribeMovies())
console.log(m1.isRecent())



// Add prototype in Class 
class Movie_class{
    constructor(title , director , releasedate){
        this.title = title,
        this.director = director,
        this.releasedate = releasedate
    }
    discribeMovies(){
        return `${this.title} is a flim directed by ${this.director} released in ${this.releasedate}`
    }
isRecent(){
    if (2025 - this.releasedate <=5){
        return `this movie is recent `
         
    } 
    else{
        return `this movie is not recent `
    }
}
}

let m2 = new Movie_class("Avenger-EndGame", "Marvel",2020)
console.log(m2)
console.log(m2.discribeMovies())
console.log(m2.isRecent())