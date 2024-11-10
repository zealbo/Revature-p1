import { Button } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { store } from "../../globalData/store"

export const Manager:React.FC = () => {
    const navigate = useNavigate()
    return(
        <>
            <h3>Manager Options:</h3>

            <Button onClick={() => navigate("/AllReimbursements")}>See All Reimbursements</Button>
            <Button onClick={() => navigate("/PendingReimbursements")}>See Pending Reimbursements</Button>
            <Button onClick={() => navigate("/AllEmployees")}>See All Employees</Button>
            <Button onClick={() => navigate("/NewReimbursement")}>Create New Reimbursement</Button>
        </>
    )

}