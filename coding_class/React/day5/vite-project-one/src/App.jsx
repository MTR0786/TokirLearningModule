import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'
import Container from './components/container'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [data,setData] =useState([])

  //useEffect(()=>{})
    function showData(){
      fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(data=>console.log(data),
                        setData(data))
        
    }
    useEffect(() => {
      console.log("triggered")
      showData()},[data])
  return (
    <>
      <Navbar/>
      <div>
        <Sidebar/>
      <Container/>
      </div>
    </>
  )
}

export default App
