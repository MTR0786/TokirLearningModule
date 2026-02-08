
let p_cont = 0;
let A_count = 0;

let total = 0;
let percentage_count=0;

let today = new Date().toLocaleDateString('en-GB');

document.querySelector("#date").innerHTML = today;

function present(){
    p_cont+=1
    total+=1
    document.querySelector("#present-count").innerHTML =p_cont;
    document.querySelector("#total-class").innerHTML = total;
    let percentage_count = Math.round((p_cont / total) * 100 * 100) / 100;

    document.querySelector("#percentage").innerHTML= percentage_count;
}



function absent(){
    A_count+=1
    total+=1
    document.querySelector("#absent-count").innerHTML =A_count;
    document.querySelector("#total-class").innerHTML = total;
    let percentage_count = Math.round((p_cont / total) * 100 * 100) / 100;

    document.querySelector("#percentage").innerHTML= percentage_count;
}