import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/counter'
import { Test } from './components/test'
import { Widthdisplay } from './components/widthDisplay'
import { IntroRef } from './components/introRef'
import { Recommendation } from './components/recommendation'

function App() {
  // const [count, setCount] = useState(0)
  const [flag,setFlag] = useState(true)
  let [inWidth ,setInwidth] = useState(window.innerWidth)

  // useEffect(()=>{
  //   console.log("rerender"),
  //   [count,flag]
  // })

  return (
    <>
    <div>
      <button onClick={()=>setFlag(!flag)}>{flag? "true" : "false"}</button>
    </div>

    <div>
      {
        flag ?
        <Recommendation/>
        // <IntroRef/>
        //  <Widthdisplay inWidth={inWidth} setInwidth={setInwidth}/>
        :
        <Test inWidth={inWidth}/>
      }
    </div>
   
     <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
