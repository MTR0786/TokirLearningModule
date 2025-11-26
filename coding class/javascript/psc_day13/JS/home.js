
function fetchcourses(){
fetch("https://ftweb-36-default-rtdb.firebaseio.com/courses.json")
    .then((res) =>(res.json()))
    .then((data)=>(displaycorses(data)))
}

fetchcourses();

function displaycorses(data){
    // console.log(data)
    let courses = Object.entries(data);
    console.log(data)
    courses.map(function(elem){
        let [id , details] =elem;
        console.log(id,details)
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
        document.querySelector("#course-card").innerHTML+=`
        <div class="course-header" id="title">
            <h3>${title}</h3>
        </div>

        <div class="course-body" id="course-body">

            <p><strong>Instructor:</strong> Prof. John Smith</p>
            <p><strong>Total Lectures:</strong> 193</p>
            <p><strong>Level:</strong> Advanced</p>
            <p><strong class="highlight-price">Price: ₹3196</strong></p>
            <p><strong>Total Hours:</strong> 30.9 hours</p>

            <p class="best" id="best">Bestseller</p>

        </div>

        <div class="course-footer" id="course-footer">
            <span class="rating" id="rating">⭐ 4.6</span>
            <span class="reviews" id="reviews">190,981 reviews</span>
        </div>
        `
    })
}
