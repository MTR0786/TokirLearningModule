
function App(){

    let [count , setCount] = React.useState(0)

    return(
        <div>
            <button onClick={()=>setCount((prev) => ++prev)}>INc</button>
            <h3>{count}</h3>
            <button onClick={()=>setCount((prev) => prev-1 )}>Dec</button>
        </div>
    )
}


let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)