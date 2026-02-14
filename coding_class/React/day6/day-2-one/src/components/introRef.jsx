import { useEffect, useRef, useState } from "react"

export const IntroRef = ()=>{

    let [inputVal , setInputval] = useState("")
    let inputRefrence = useRef(null)

    function handleClick(){
        console.log(inputRefrence.current.value)

    }
   useEffect(() =>{
    inputRefrence.current.focus()   // to focus of cusor in input tag
   },[])

    return(
        <div>
            <input type="text" ref={inputRefrence} placeholder="Name"/>
            <button onClick={handleClick}>press</button>
        </div>
    )
}