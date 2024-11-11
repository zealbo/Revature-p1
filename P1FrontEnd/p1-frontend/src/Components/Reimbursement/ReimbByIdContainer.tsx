import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ReimbByIdTable } from "./ReimbByIdTable"
import { store } from "../../globalData/store"

export const ReimbursementByIdContainer:React.FC = () => {

    const[reimbursements, setReimbursements] = useState([])

    useEffect(()=>{
        getAllReimbursements()
    }, [reimbursements]) 

    const getAllReimbursements = async () => {

        const response = await axios.get("http://localhost:7878/reimbursements/" + store.loggedInUser.userId)
        //TODO: then(), catch() etc

        setReimbursements(response.data) 

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>Your Reimbursements:</h3>

            <ReimbByIdTable reimbursements={reimbursements}></ReimbByIdTable>

        </Container>
    )

}