
async function loadphotos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos?_page=3$_limit=10")
    let photos = await res.json();
    console.log(photos)
    photos.map(function(elem){
        document.querySelector("#gallery").innerHTML+=`
        <div>
            <div>${elem.title}</div>
            <div><img src="${elem.url}" alt=""></div>
        </div>
        `
    })
}
loadphotos()
