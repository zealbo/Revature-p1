import axios from "axios";
import { useState } from "react";
import { Button, Container, Dropdown, DropdownButton, Table } from "react-bootstrap"
import { store } from "../../globalData/store";
import { useNavigate } from "react-router-dom"

export const PendingReimbByIdTable:React.FC<{reimbursements:any[]}> = ({reimbursements}) => {

    const [description, setDescription] = useState<string>('');

    const updateDescription = async (id: number, newDescription: string) => {
        const response = await axios.patch(`http://localhost:7878/reimbursements/${id}/description`, newDescription, { headers: { 'Content-Type': 'text/plain' }});    
    };

    const navigate = useNavigate();

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Reimbursement ID</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>User ID</th>
                        <th>Update Description</th>
                    </tr>
                </thead>
                <tbody>
                    {reimbursements.map((reimbursement:any) => (
                        <tr>
                            <td>{reimbursement.reimbId}</td>
                            <td>{reimbursement.amount}</td>
                            <td>{reimbursement.description}</td>
                            <td>{reimbursement.status}</td>
                            <td>{reimbursement.user.userId}</td>
                            <td>
                                <form onSubmit={(e) => {
                                    e.preventDefault();  // Prevent default form submission behavior
                                    updateDescription(reimbursement.reimbId, description);  // Pass reimbId and description to updateDescription
                                }}>
                                    <label htmlFor="descriptionInput">Description:</label>
                                    <input type="description" id="descriptionInput" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                                    <br /><br />

                                    <Button type="submit">Submit</Button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <Button onClick={()=>navigate(-1)}>Back</Button>
            </div>
        </Container>
    )

}