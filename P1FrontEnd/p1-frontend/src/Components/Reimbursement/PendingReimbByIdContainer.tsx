import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { PendingReimbByIdTable } from "./PendingReimbByIdTable"
import { store } from "../../globalData/store"

export const PendingReimbursementsByIdContainer:React.FC = () => {

    const[reimbursements, setReimbursements] = useState([])

    useEffect(()=>{
        getPendingReimbursements()
    }, [reimbursements]) //this useEffect triggers on component load


    //The function that gets all pets with an axios GET request
    const getPendingReimbursements = async () => {

        //axios GET request 
        const response = await axios.get(`http://localhost:7878/reimbursements/${store.loggedInUser.userId}/PENDING`)
        //TODO: then(), catch() etc

        //populate the pets state object
        setReimbursements(response.data) //data holds the data send in the response body

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>Pending Reimbursements:</h3>

            {/* Sending the entire pets array to get rendered in the PetTable Component */}
            <PendingReimbByIdTable reimbursements={reimbursements}></PendingReimbByIdTable>

        </Container>
    )

}