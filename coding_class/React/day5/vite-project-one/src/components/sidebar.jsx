import { useState } from "react"
import "../style/sidebar.css"
export let Sidebar = ()=> {
    let [toggle,setToggle] = useState(false)
    function Toggle(){

    }
    return(
        <div className="sidebar">
            <button onClick={()=>setToggle(!toggle)}>Toggle</button>

            <div>
                {
            toggle ?  

            <div>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
                <p>Just testing sidebar out</p>
            </div>
            :
            <div>
                
            </div>
        }
          </div>
            

        </div>
    )
}
