
let [isLogged, setIsLogged] = React.useState(false);  //usestate

//useState takes an original vlue and returns two things in 



let Navbar =() => {
    function ToggleLogIn(title){
    setIsLogged((prev) => prev ? false: true)
}
return(
    <div>
        <button>Home</button>
        <button>About</button>
        <button>Theme</button>
        <button onClick={ToggleLogIn}>Login</button>
    </div>
)
}



let Card = ({ele})  =>{
    return (
        <div key={ele.id} >
                <img style={{width: "150px", height: "100px"}} src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg" />
                <p><b>Name: </b> {ele.name}</p>
                <p><b>Email:</b>{ele.email} </p>
                <h4>{ele.department}</h4>
        </div>

    )
}

let Container =() =>{
    let arr = [
  { id: 1, name: "Arif Raza", email: "arif121@gmail.com", department: "Finance" },
  { id: 2, name: "Aman Khan", email: "aman.khan@gmail.com", department: "HR" },
  { id: 3, name: "Rahul Verma", email: "rahul.verma@gmail.com", department: "IT" },
  { id: 4, name: "Neha Sharma", email: "neha.sharma@gmail.com", department: "Marketing" },
  { id: 5, name: "Imran Ali", email: "imran.ali@gmail.com", department: "Operations" },
  { id: 6, name: "Pooja Singh", email: "pooja.singh@gmail.com", department: "Finance" },
  { id: 7, name: "Sahil Gupta", email: "sahil.gupta@gmail.com", department: "Sales" },
  { id: 8, name: "Anjali Mehta", email: "anjali.mehta@gmail.com", department: "HR" },
  { id: 9, name: "Rohit Kumar", email: "rohit.kumar@gmail.com", department: "IT" },
  { id: 10, name: "Ayesha Noor", email: "ayesha.noor@gmail.com", department: "Marketing" },
  { id: 11, name: "Vikas Yadav", email: "vikas.yadav@gmail.com", department: "Operations" },
  { id: 12, name: "Sneha Patil", email: "sneha.patil@gmail.com", department: "Finance" },
  { id: 13, name: "Faizan Ahmad", email: "faizan.ahmad@gmail.com", department: "Sales" },
  { id: 14, name: "Kriti Joshi", email: "kriti.joshi@gmail.com", department: "HR" },
  { id: 15, name: "Aditya Mishra", email: "aditya.mishra@gmail.com", department: "IT" },
  { id: 16, name: "Nida Fatima", email: "nida.fatima@gmail.com", department: "Marketing" },
  { id: 17, name: "Mohit Bansal", email: "mohit.bansal@gmail.com", department: "Operations" },
  { id: 18, name: "Riya Choudhary", email: "riya.ch@gmail.com", department: "Finance" },
  { id: 19, name: "Zeeshan Malik", email: "zeeshan.malik@gmail.com", department: "Sales" },
  { id: 20, name: "Kunal Arora", email: "kunal.arora@gmail.com", department: "IT" }
];

    
    return(
        <div id="cont" className="Container">
            {
                
                arr.map((ele,i)=>{
                    return(
                        <div>
                            {
                       isLogged ?
                       <>
                       <Card ele={ele} />
                       <button>Add friend</button>  
                       </>
                       :
                       <Card ele={ele} />
                            }
                        </div>

                        )
                })
                
            }
           
        </div>
    )

    
}


let App = () =>{
    return (
        <>
        <Navbar/>
        <Container/>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

// let obj ={
//     isLogged:true,
//     isAdmin:false,
// }

// let {isLogged,isAdmin} = obj

