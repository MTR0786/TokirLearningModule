import loadnavbar from "../JS/navbar.js";

loadnavbar();

document.querySelector("#createForm").addEventListener("submit", CreateCourse)

function CreateCourse(){
    event.preventDefault(); 
    let title    = document.querySelector("#title").value;
    let instructor  = document.querySelector("#instructor").value;
    let rating       = document.querySelector("#rating").value;
    let reviews      = document.querySelector("#reviews").value;
    let price        = document.querySelector("#price").value;
    let totalHours   = document.querySelector("#total_hours").value;
    let lectures     = document.querySelector("#lectures").value;
    let level        = document.querySelector("input[name='level']:checked")?.value;
    let bestseller   = document.querySelector("input[name='bestseller']:checked")?.value;

    let data = JSON.stringify({
        "title": title,
        "instructor": instructor,
        "rating": rating,
        "reviews": reviews,
        "price": price,
        "total_hours": totalHours,
        "lectures": lectures,
        "level":level ,
        "bestseller": bestseller
    })
    var requestOptions = {
    method: 'POST',
    body: data,
    };

fetch("https://ftweb-36-default-rtdb.firebaseio.com/courses.json", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result),
    window.location.href = "../HTML/home.html"
  })
  .catch(error => console.log('error', error));

}