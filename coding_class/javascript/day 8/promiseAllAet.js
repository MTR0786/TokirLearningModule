// Promise.all()

// let promise1 = new Promise((resolve , reject) => {
//     resolve ("Task-1 is completed")
// });

// let promise2 = new Promise((resolve , reject) => {
//     resolve ("Task-2 is completed")
// });
// let promise3 = new Promise((resolve , reject) => {
//     reject ("Task-3 is completed")
// });
// let promise4 = new Promise((resolve , reject) => {
//     resolve ("Task-4 is completed")
// });


// console.log(Promise.all([promise1,promise2,promise3,promise3]))

// Promise.all([promise1,promise2,promise3,promise4])
//     .then((res)=>console.log(res))
//     .catch((err) => console.log(err))



//promise >>>> Promise.allsettled()

// let promise1 = new Promise((resolve , reject) => {
//     resolve ("Task-1 is completed")
// });

// let promise2 = new Promise((resolve , reject) => {
//     reject ("Task-2 is completed")
// });
// let promise3 = new Promise((resolve , reject) => {
//     resolve ("Task-3 is completed")
// });


// console.log(Promise.allSettled([promise1,promise2,promise3]));

// Promise.allSettled([promise1,promise2,promise3])
//         .then((res) => (console.log(res))) 
//         .catch((err) => (console.log(err)));


//promise >>>>> Promise.any()

// let promise1 = new Promise((resolve , reject) => {
//     resolve ("Task-1 is completed")
// });

// let promise2 = new Promise((resolve , reject) => {
//     reject ("Task-2 is completed")
// });
// let promise3 = new Promise((resolve , reject) => {
//     resolve ("Task-3 is completed")
// });


// console.log(Promise.any([promise1,promise2,promise3]));


//Promise >> Promise.race

let promise1 = new Promise((resolve , reject) => {
    reject ("Task-1 is completed")
});

let promise2 = new Promise((resolve , reject) => {
    reject ("Task-2 is completed")
});
let promise3 = new Promise((resolve , reject) => {
    resolve ("Task-3 is completed")
});


Promise.race([promise1,promise2,promise3])
    .then((res) => (console.log(res)))
    .catch((err) => (console.log(err)))