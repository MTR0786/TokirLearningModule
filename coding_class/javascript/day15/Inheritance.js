// Inheritance using Class
//Example 1

class Book {
    constructor(title, author,year){
        this.title =title
        this.author = author
        this.year = year
    }
    getSummary(){
        console.log(`${this.title} was wriiten by ${this.author} in ${this.year}`)
    }

}
class Magazine extends Book{
    constructor(title, author,year,month){
        // this.title =title
        // this.author = author
        // this.year = year
        super(title,author,year)
        this.month = month
    }
     getSummary(){
        console.log(`${this.title} was wriiten by ${this.author} in ${this.year} on ${this.month}`)
    }
}

let b1 =new Book("Game of thranos","M.M martine",2002)
b1.getSummary()

m1 = new Magazine("abc",'xyz',2015,"january")
m1.getSummary()


//Example 2

class Rectangle{
    constructor(w,h){
        this.w=w
        this.h=h

    }
    area(){
        return(this.h*this.w)
    }
    perimeter(){
        return 2*(this.h + this.w)
    }
}

class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
}

r1 =new Rectangle(10,12)
console.log(r1.area() , r1.perimeter())

let s1 =new Square(10)
console.log(s1)
console.log(s1.area(),s1.perimeter())