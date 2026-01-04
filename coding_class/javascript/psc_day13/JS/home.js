import  loadnavbar from "../JS/navbar.js";

loadnavbar();

let courses
function fetchcourses(){
    //fetch(`https://ftweb-36-default-rtdb.firebaseio.com/courses.json?orderBy="$key"&limitToLast=50`)
fetch(`https://ftweb-36-default-rtdb.firebaseio.com/courses.json`)
    .then((res) =>(res.json()))
    .then((data)=>{
        courses =Object.entries(data);
        displaycorses(courses)})
}

fetchcourses();

function displaycorses(data){
    document.querySelector("#container").innerHTML=""
    // console.log(data)
    // courses = Object.entries(data);
    // console.log(data)
    data.map(function(elem){
        let [id , details] =elem;
        // console.log(id,details)
        let {
         title,
        instructor,
        rating,
        reviews,
        price,
        total_hours,
        lectures,
        level,
        bestseller
        } =details ;
        document.querySelector("#container").innerHTML+=`
        <div class="course-card" id="course-card">
        <div class="course-header" id="title">
            <h3>${title}</h3>
        </div>

        <div class="course-body" id="course-body">

            <p><strong>Instructor:</strong> ${instructor}</p>
            <p><strong>Total Lectures:</strong> ${lectures}</p>
            <p><strong>Level:</strong> ${level}</p>
            <p><strong class="highlight-price">Price: ${price}</strong></p>
            <p><strong>Total Hours:</strong> ${total_hours} hours</p>

            <p class="best" id="best">${bestseller ? "Bestseler":"Average Seller"}</p>

        </div>

        <div class="course-footer" id="course-footer">
            <span class="rating" id="rating">⭐ ${rating}</span>
            <span class="reviews" id="reviews">${reviews} reviews</span>
        </div>
        <div id =enroll>
            <button id="addCart" onclick="addToCart()" >Add to cart</button>
        </div>
     </div>
        `
    })
}


document.querySelector("#filterLevel").addEventListener("change" , filterlevel);

function filterlevel(){
    let selected = document.querySelector("#filterLevel").value;
    // console.log(selected)

    let filtercorses = courses.filter(function (elem){
        let [id , details] =elem;
        return details.level === selected;
    });
    displaycorses(filtercorses)
    // console.log(filtercorses, length.filtercorses)

}

function addToCart(){
    console.log("Hello")
}