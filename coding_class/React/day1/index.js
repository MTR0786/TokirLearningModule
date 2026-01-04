

function Navbar(){
    return (<div>
                <h1>This is Navbar</h1>
                <button>Click me</button>
            </div>
    )
}

function Content(){
    return (
    <>
        <h2>This is content</h2>
        <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Graphes</li>
            <li>{console.log("this is js console")}</li>
        </ul>
    </>
    )
}

function Footer(){
    return <h1>This is Footer</h1>
}
function App(){
    return (
        <>
        <Navbar/>
        <Content/>
        <Footer/>
        </>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"))

root.render(<h1>This is my first react code</h1>)



root.render(App())