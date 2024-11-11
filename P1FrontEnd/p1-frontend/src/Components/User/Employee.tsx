import { Button } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { store } from "../../globalData/store"

export const Employee:React.FC = () => {
    const navigate = useNavigate()
    return(
        <>
            <h3>Employee Options:</h3>

            <Button onClick={() => navigate("/NewReimbursement")}>Create New Reimbursement</Button><br/><br/>
            <Button onClick={() => navigate("/YourReimbursements")}>See Your Reimbursements</Button><br/><br/>
            <Button onClick={() => navigate("/YourPendingReimbursements")}>See Your Pending Reimbursements</Button><br/><br/>
        </>
    )

}