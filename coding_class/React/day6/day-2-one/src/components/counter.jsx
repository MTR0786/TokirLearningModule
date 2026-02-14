import { useEffect, useState } from "react"

export const Counter = ()=>{

    const [count ,setCount]=useState(0)
    useEffect(()=>{
        console.log("mount")
        let intervalID=setInterval(()=>{
                setCount((prev)=>prev+1)
            },1000)
        return() =>{
            console.log('unmount')
            clearInterval(intervalID)
        }

    }, [])

    return (
        <h2>Counter: {count}</h2>
    )
}