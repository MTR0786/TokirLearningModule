let auth = localStorage.getItem("authToken");
console.log(auth)

if (auth){
    document.querySelector("#b2resister").style.display = "none";
    document.querySelector("#logout").style.display = "block";
    document.querySelector("#b3login").style.display = "none";
}
function fetchData(){
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://wbft36-default-rtdb.firebaseio.com/users.json", requestOptions)
  .then(response => response.json())
  .then(result => displayUsers(result))
  .catch(error => console.log('error', error));

}
fetchData()

//logout
document.querySelector("#logout").addEventListener("click" , function(){
    localStorage.removeItem("authToken");
    window.location.reload();

})

function displayUsers(data){
    // console.log(typeof(data),data)
    document.querySelector("#usercards").innerHTML=""

    let res = Object.entries(data);
    // console.log(res)

    res.map(function(elem){
        // console.log(elem[1])
        let name = elem[1].name
        let id = elem[0]
        let emailId = elem[1].email
        document.querySelector("#usercards").innerHTML+=`
         <div>
         <p>${id}</p>
        <h2>${name}</h2>
        <p>${emailId}</p>
        <button id="delete" onclick="deleteUser(${id})">Delete</button>
        <button id="edit" onclick="editUser(${id})">Edit</button>
        </div>
        `
    })
}
function editUser(id){
    // console.log(id)
    window.location.href =`edit.html?userId=${id}`;
}

function deleteUser(id){
    // console.log(id)

    fetch(`https://wbft36-default-rtdb.firebaseio.com/users/${id}.json`,{
        method:"DELETE",
    } )
    .then((res)=>(res.json))
    .then((out)=>{
        alert(`user ${id} has been deleted`);
        fetchData()})
    .catch((err) => (console.log(err)))

    
}

// ?userId=${id}&name=${name}