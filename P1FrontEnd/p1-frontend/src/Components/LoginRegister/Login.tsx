import axios from "axios"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { store } from "../../globalData/store"

export const Login:React.FC = () => {

    //A state object that holds username and password
    const[loginCreds, setLoginCreds] = useState({
        username:"",
        password:""
    })
    const navigate = useNavigate()

    //Function that stores user input
    const storeValues = (input:any) => {

        const name = input.target.name //the name of the input box that changed
        const value = input.target.value //the value in the input box 

        setLoginCreds((loginCreds) => ({...loginCreds, [name]:value}))

    }

    const login = async () => {

        //TODO: we should make sure the username/password are inputted first

        const response = await axios.post("http://localhost:7878/auth", loginCreds)
        .then(

            (response) => {

                console.log(response.data)

                store.loggedInUser = response.data

                alert("Welcome, " + store.loggedInUser.username)

                if(store.loggedInUser.role === "manager"){
                    navigate("/managers")
                } else {
                    navigate("/employees")
                }
            }
        )
        .catch((error)=>{
            alert("Login Failed! Please try again.")
        })

    }


    return(
        <Container> 

            <h1>Welcome to RevERB</h1>
                <h3>Please Log In:</h3>
                
                <div>
                    <Form.Control
                        type="text"
                        placeholder="username"
                        name="username"
                        onChange={storeValues}
                    />
                </div>

                <div>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={storeValues}
                    />
                </div>
                

            <Button className="btn-success m-1" onClick={login}>Login</Button>
            <Button className="btn-dark" onClick={()=>navigate("/register")}>Register</Button>
        </Container>
    )

}