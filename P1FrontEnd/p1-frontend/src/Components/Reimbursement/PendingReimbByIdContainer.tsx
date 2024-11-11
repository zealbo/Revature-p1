import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { PendingReimbByIdTable } from "./PendingReimbByIdTable"
import { store } from "../../globalData/store"

export const PendingReimbursementsByIdContainer:React.FC = () => {

    const[reimbursements, setReimbursements] = useState([])

    useEffect(()=>{
        getPendingReimbursements()
    }, [reimbursements]) 

    const getPendingReimbursements = async () => {

        const response = await axios.get(`http://localhost:7878/reimbursements/${store.loggedInUser.userId}/PENDING`)
        //TODO: then(), catch() etc

        setReimbursements(response.data) //data holds the data send in the response body

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>Pending Reimbursements:</h3>

            <PendingReimbByIdTable reimbursements={reimbursements}></PendingReimbByIdTable>

        </Container>
    )

}