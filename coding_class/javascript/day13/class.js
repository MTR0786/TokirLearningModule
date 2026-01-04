// factory fnctions

let student = {
    name:"arif",
    gender:"male",
    birthyear:2001,

    calculateAge(){
        console.log(this)
        return 2025 - this.birthyear;
    }

}
console.log(student.calculateAge())

//constructor

function User(name,birthyear){
    this.name = name
    this.birthyear =birthyear

    this.calculateAge = function(){
        return 2025 - this.birthyear
    }
}
let p1 = new User('atif', 2009)
console.log(p1.calculateAge())

// Classes

class Person{
    constructor(name, birthyear){
        // console.log(this)
        // console.log("inside constructor");
        this.name = name;
        this.birthyear = birthyear;

        this.age = function(){
            return 2025 - this.birthyear
        }
    }}

let s = new Person("arif" , 2005);
console.log(s.age())

//factory function 
let result = {
    name:"arif",
    age:21,
    physics :75,
    math:87,
    chemistry:78,
    english:67,
    economics:88,
    total(){
            return (this.math+ this.physics+this.chemistry+ this.english+ this.economics)
    },
    percentage(){
        return this.total()/5
    }

}

r1 = result.total()
console.log(r1)
p1 = result.percentage()
console.log(p1)

//constructor
function Result(name,age,physics,math,chemistry,english,economics){
    this.name = name
    this.age =age
    this.math = math
    this.physics =physics
    this.chemistry =chemistry
    this.english =english
    this.economics =economics

    this.total = function(){
        console.log("total")
        return this.physics + this.chemistry + this.math + this.english +this.economics

    }

    this.percentage = function(){
        console.log("percentage")
        return this.total()/5
    }

}

r2 = new Result("adil" , 19, 50,50,50,50,50)

console.log(r2.total() ,r2.percentage())


class Result_class{
    constructor(name,age,physics,math,chemistry,english,economics){
        this.name = name
        this.age =age
        this.math = math
        this.physics =physics
        this.chemistry =chemistry
        this.english =english
        this.economics =economics

        this.total = function(){
            console.log("total")
            return this.physics + this.chemistry + this.math + this.english +this.economics

    }

        this.percentage = function(){
            console.log("percentage")
            return this.total()/5
    }

    }
}
r3 = new Result_class("abdul" , 21 , 90,90,90,90,90)

console.log(r3.total() ,r3.percentage())