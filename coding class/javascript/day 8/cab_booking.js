// bookcab , waitforcab, trip started .  trip cmpeleted , rating


function bookcab(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("cab booked")
            resolve()
        },2000);
    })
}

function waitforcab(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("wait for the cab")
            resolve()
        },1000);
    })
}

function tripstarted(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("trip has started, !Happy journey")
            resolve()
        },2000);
    })
}

function tripcompeleted(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("Now trip is compeleted")
            resolve()
        },2000);
    })
}

// bookcab()
// .then((res) => waitforcab())
// .then((res) => tripstarted())
// .then((res) => tripcompeleted())
// .catch((err) => console.log(err))


async function cabprosses() {
    await bookcab()
    await waitforcab()
    await tripstarted()
    await tripcompeleted()
    
}

cabprosses()