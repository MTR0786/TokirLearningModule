
class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    displayUserDetails(){
        console.log(`User is ${this.name} and age is ${this.age}`)
    }

    // encapsulation
    static displayGreetings(){
        console.log("welcome to encapsulation")
    }
}

// console.log(User)
let u1 = new User("Ashwani", 24)
// console.log(u1)
// u1.displayUserDetails()
// u1.displayGreetings()

class Admin extends User{
    constructor(name,age,role){
        super(name,age)
        this.role =role;
    }

}
Admin.displayGreetings()
