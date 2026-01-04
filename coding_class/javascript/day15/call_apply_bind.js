// call , apply , bind

const studentMethod ={
    web36: function(){
        console.log(`I am from web36 , and my name is ${this.firstname} ${this.lastname}`)
    }
}

function web36(roll,course){
    console.log(`I am from web36 , and my name is ${this.firstname} ${this.lastname} and my roll number is ${roll}. I am enrolled in ${course} `)
}

const student1 = {
        firstname : "anjum",
        lastname:"khatoon",
        web36: function(){
            console.log(`I am from web36 , and my name is ${this.firstname} ${this.lastname}`)
        }
}
const student2 = {
        firstname : "arif",
        lastname:"raza",
        // web36: function(){
        //     console.log(`I am from web36 , and my name is ${this.firstname} ${this.lastname}`)
        // }
}

//1>>>>>>call the method web36 from student1

// student1.web36()
// student1.web36.call(student2)

//output     I am from web36 , and my name is anjum khatoon
            // I am from web36 , and my name is arif raza


// web36.call(student1,101,'javascript')
// web36.call(student2,[101,'python'])


//2.>>>>>>> bind

let s1 =web36.bind(student1)
s1(101,'java')