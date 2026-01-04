// async function will always return a promise which is fullfiled by default
// await - will pause eecution of async function till promise is resolve


// function order(){
//     return new Promise((resolve, reject) => {

//     })
// }


// async function order(){
//     return "order something"
// }

// order()
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
    


// Example uses


let washclothes = 
    new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve()
        console.log("washing clothes is done")
        
    }, 3000)
}) 

let dryclothes = 
    new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve()
        console.log("clothes are dry")
    }, 2000)
}) 



async function laundry() {
   await washclothes;
   await dryclothes;
    console.log("collect clothes")
}

laundry()