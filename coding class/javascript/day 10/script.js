console.log("hello")

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => (res.json()))
    .then((out) => (displaydata(out)))
    .catch((err) => (console.log(err)))



async function  fetchtools() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos")
        let data = await res.json()
        console.log(data)
        // displaydata(data)
        
    }
    catch (error) {
        
    }
    
    
}
fetchtools()

function displaydata(data){
    // console.log(data)
    data.map(function (elm){
        document.querySelector("tbody").innerHTML += `
        <tr>
            <td>${elm.id}</td>
            <td>${elm.title}</td>
            <td>${elm.completed}</td>
        </tr>`
    })
}