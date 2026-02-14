import { useEffect, useState } from "react"


export const Widthdisplay = ({inWidth,setInwidth}) =>{
    

    useEffect(() => {
        console.log("have added the event")
        function updateWidth(){
            setInwidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)

        return()=>{
            console.log("have removes the event")
            window.removeEventListener('resize' ,updateWidth)
        }
    },[])

    return(
        <h2>ViewWidth : {inWidth}</h2>
    )
}