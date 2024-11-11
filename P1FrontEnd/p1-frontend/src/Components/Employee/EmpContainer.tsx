import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { EmpTable } from "./EmpTable"
import { store } from "../../globalData/store"

export const EmployeeContainer:React.FC = () => {

    const[users, setusers] = useState([])

    useEffect(()=>{
        getAllUsers()
    }, [users]) //rerenders component when state changes

    //gets all users with an axios request
    const getAllUsers = async () => {

        //axios GET request 
        const response = await axios.get("http://localhost:7878/users")
        //TODO: then(), catch() etc

        //populate the users state object
        setusers(response.data) //data holds the data sent in the response body

        console.log(response.data)
    }


    return(
        <Container>

            <h3>All users:</h3>

            {/* Sending the entire users array to get rendered in the EmpTable Component */}
            <EmpTable users={users}></EmpTable>

        </Container>
    )

}