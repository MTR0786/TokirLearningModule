// API >>>> Apllication programming Interface

// import React from "react"

//Input in react

let URL = "https://dummuy101-default-rtdb.firebaseio.com/";

// input in react // CRUd => TO do

let {useState} = React

let Form = () =>{

    let initState = {
         task: "",
        status:"",
        priority:"",
    }

let [data , setData] = useState(initState)

function handleForm(e){
    // console.log(e.target.name , e.target.value)

    let {target:{name,value}}=e
    setData({...data , [name]:value})  //dynamic key access

}

async function handleSubmit(e){
    e.preventDefault()
    let response = await axios.post(URL ,data)
    console.log(response.data)
    setData({initState})
}

async function showData(){
    let res = await axios.get(URL)
    console.log(res.data)
}

showData()

    return(
        <form onSubmit={handleSubmit}>
            <input name="task" value={data.task} placeholder="Task" onChange={handleForm} ></input>
            <input name="status" value={data.status} placeholder="status" onChange={handleForm}></input>
            <input name="priority" value={data.priority} placeholder="priority" onChange={handleForm} ></input>
            <button type="submit">Submit</button>
            
        </form>
    )
}

let App = () =>{

    return(
    <>
    <h1>We are going to learn API</h1>
    <Form/>
    </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)


// firebase >>>  