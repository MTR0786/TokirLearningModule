import { useRef, useState } from "react"

export const Recommendation = ()=>{

    let [update , setUpdate]=useState(false)
    let hoveredDivs = useRef([])
    let divArr = ["div1","div2","div3","div4","div5","div6","div7","div8"]
function handleMouseHover(ele){
    console.log(ele)
}
return(
    <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px"}}>
        {
            divArr.map((ele,i)=>{
                return(
                    <div
                    onMouseMove={()=>handleMouseHover(ele)}  // if mouse move call the function
                    key={i}
                    style={{border:"5px solid green" , padding:"20x"}}>
                    <h3>{ele}</h3>
                    </div>
                )
            })
        }
    </div>
)
}