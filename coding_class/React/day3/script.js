// import React, { useState } from "react"

let {useState} = React

let Counter = () => {
    console.log("count-re-render")
    let[count, setCount] = useState(0)
    
    function updateCount(i){

        if(count!=0 || i!=-1){
            setCount(count+i)
        }
       
        // console.log("hii")
    }
    
    return(<>
    <button onClick={function(){updateCount(-1)}}>DEC</button>
    <h2>{count}</h2>
    <button onClick={function(){updateCount(1)}}>INC</button>
    </>
)
}

let VDOmtest = ()=>{
    console.log("testing  VDOM")

    return(
        <h2>Testing if VDOM actually works!</h2>
    )
}

let Register = () =>{
    let [name , setName] = useState("")
    let [email,setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [phone,setPhone] = useState("+91-")
    let [age,setAge] = useState("")

    let[demoDB ,setDemoDB] = useState([])

    function HandleClick(){
        // console.log(name,email,password,phone)
        let obj = {
            id: Math.random().toString() , name , email, password, phone
        }
        setDemoDB((prev) => [...prev,obj])
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")

        console.log(demoDB)
        
    }
   
    return (
    <>
        <div>
            
            <input value={name} placeholder="Name" 
                    onChange={(e)=>setName(e.target.value)} />
            <input value={email} placeholder="email"
                    onChange={(e)=>setEmail(e.target.value)}/>
            <input value={password} placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}/>
            <input value={phone} placeholder="phone Number" 
                    onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={HandleClick} >Register</button>
        </div>
        <DisplayData demoDB ={demoDB} setDemoDB={setDemoDB}/>
        {/* console.log({id}) */}
        

    </>
    
    )
    
}



let DisplayData = ({demoDB, setDemoDB}) => {
    
    function handleDelete(id){
        let newData = demoDB.filter((ele)=> ele.id !== id)
        setDemoDB(newData)
    }
    return(
         <div>{
            demoDB.map((ele) =>{
                    return(
                            <div>
                            <span>id:- {demoDB.map((ele)=> ele.id)}</span>
                            <p>Name:- <span>{ele.name}</span></p>
                            <p>Email:-  <span>{ele.email}</span></p>
                            <p>Phone:- <span>{ele.phone}</span></p>
                            <button onClick={() =>handleDelete(ele.id)} >Delete</button>
                        </div>
                    )
            })
        }
        </div>
    )
}



let App = () =>{
// useState => Number & booleans
// let [toggle,setToggle] = useState(true)   // conditional rendering, conditional sy=tyling , switch on off , flag
// let [num,setNum] = useState(0)         // counter , pagination , lists, play eith numbers, flag
// let [str,setStr] = useState("")    // inputs , search , writing text , 
// let [arr,setArr]  = useState([])   // data storage , lists, 
// let [obj,setObj] = useState({})  // multiplee datatype , key value pair , collection of data type
  
    return(
            <>
            <Register/>
            {/* <Counter/>
            <VDOmtest/> */}
            </>
        
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App/>)


function userData(){
    let a =1
    let b = 2
    let c =[1,2,3,4]

    return{
        a ,b ,c
    }
}




