import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ReimbTable } from "./ReimbTable"
import { store } from "../../globalData/store"

export const PendingReimbursementContainer:React.FC = () => {

    const[reimbursements, setReimbursements] = useState([])

    useEffect(()=>{
        getPendingReimbursements()
    }, [reimbursements]) 


    const getPendingReimbursements = async () => {

        const response = await axios.get("http://localhost:7878/reimbursements/PENDING/status")
        //TODO: then(), catch() etc

        setReimbursements(response.data) //data holds the data send in the response body

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>Pending Reimbursements:</h3>

            <ReimbTable reimbursements={reimbursements}></ReimbTable>

        </Container>
    )

}