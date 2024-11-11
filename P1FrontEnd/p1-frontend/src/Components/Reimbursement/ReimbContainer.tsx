import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { ReimbTable } from "./ReimbTable"
import { store } from "../../globalData/store"

export const ReimbursementContainer:React.FC = () => {

    const[reimbursements, setReimbursements] = useState([])

    useEffect(()=>{
        getAllReimbursements()
    }, [reimbursements]) 

    const getAllReimbursements = async () => {

        const response = await axios.get("http://localhost:7878/reimbursements")
        //TODO: then(), catch() etc

        setReimbursements(response.data) 

        console.log(response.data)
    }


    return(
        /* TODO: navbar thing? for navigation options etc */
        <Container>

            <h3>All Reimbursements:</h3>

            <ReimbTable reimbursements={reimbursements}></ReimbTable>

        </Container>
    )

}