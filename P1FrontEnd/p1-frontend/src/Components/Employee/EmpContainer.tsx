import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { EmpTable } from "./EmpTable"
import { store } from "../../globalData/store"

export const EmployeeContainer:React.FC = () => {

    const[users, setusers] = useState([])

    useEffect(()=>{
        getAllUsers()
    }, []) //this useEffect triggers on component load


    //The function that gets all pets with an axios GET request
    const getAllUsers = async () => {

        //axios GET request 
        const response = await axios.get("http://localhost:7878/users")
        //TODO: then(), catch() etc

        //populate the pets state object
        setusers(response.data) //data holds the data send in the response body

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>All users:</h3>

            {/* Sending the entire pets array to get rendered in the PetTable Component */}
            <EmpTable users={users}></EmpTable>

        </Container>
    )

}