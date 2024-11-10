import axios from "axios"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


export const Register:React.FC = () => {
    //define a state object to store the username and password
    const[user, setUser] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    })

    //Define a useNavigate  so we can switch URL's around
    const navigate = useNavigate()

    const storeValues = (input:any) => {
        const name = input.target.name // the name of the input box that changed
        const value = input.target.value 
        setUser((user) => ({...user, [name]:value}))
    }

    //register function that sends the username/password to the backend
    const Register = async () => {
        //TODO: check username and password are present

        const response = await axios.post("http://localhost:7878/users", user)
        .then(() => {alert("Success!")})
        .catch((error) => {alert("Failed! " + error.message)})
    }

    return(
        <Container className="my-2 mx-auto">
            <div>
                <h1>New here? Create an Account for free!</h1>

                <div>
                    <Form.Control
                        type="text"
                        placeholder="first name"
                        name="firstName"
                        onChange={storeValues}
                    />
                </div>
                <div>
                    <Form.Control
                        type="text"
                        placeholder="last name"
                        name="lastName"
                        onChange={storeValues}
                    />
                </div>
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

                <div>
                <Button className="btn-success m-1" onClick={Register}>Register</Button>
                <Button className="btn-dark" onClick={() => navigate("/")}>Back</Button>
                </div>
            </div>
        </Container>
    )

}