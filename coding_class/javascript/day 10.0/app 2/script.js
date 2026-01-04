
let apiurl = "https://jsonplaceholder.typicode.com/posts"
let items_per_page = 10;
data = []
let currntpage = 1;

fetch(apiurl)
    .then((res) => res.json())
    .then((posts) => {
        data = posts; displaypost(data); setuppagination(); })
    .catch((err) => console.log(err));
    
function displaypost(data){
    document.querySelector('#container').innerHTML=""
    let start = (currntpage-1)*items_per_page
    let end = start + items_per_page
    let sliceposts = data.slice(start,end)
    console.log(sliceposts)
    // console.log(data)
    sliceposts.map(function(elem){
        document.querySelector("#container").innerHTML += `
        <div>
        <p>${elem.id}</p>
        <h2>${elem.title}</h2>
        <p>${elem.body}</p>
        </div>
        `
    })
}


function setuppagination(){
    let page_count = data.length / items_per_page;
    // console.log(page_count);
    for (let i=1; i<=page_count; i++){
        let pages = document.createElement("li")
        pages.textContent = i;
        pages.addEventListener("click", function(){
            currntpage=i
            displaypost(data);
        })
        document.querySelector("#pagination").append(pages);
    }
}
//