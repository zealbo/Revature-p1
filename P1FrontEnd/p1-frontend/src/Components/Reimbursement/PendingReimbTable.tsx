import axios from "axios";
import { Button, Container, Dropdown, DropdownButton, Table } from "react-bootstrap"

export const PendingReimbTable:React.FC<{reimbursements:any[]}> = ({reimbursements}) => {

    const updateStatus = async (id: number, newStatus: string) => {
        const response = await axios.patch(`http://localhost:7878/reimbursements/${id}/status`, newStatus, { headers: { 'Content-Type': 'text/plain' }});    
    };

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
                                {/* Dropdown Menu */}
                                <DropdownButton
                                    id={`dropdown-${reimbursement.reimbId}`}
                                    title={`${reimbursement.status}`}
                                >
                                    <Dropdown.Item eventKey="Approved" onClick={async () => {
                                        await updateStatus(reimbursement.reimbId, "APPROVED");
                                        window.location.reload(); 
                                    }}>Approved</Dropdown.Item>

                                    <Dropdown.Item eventKey="Denied" onClick={async () => {
                                        await updateStatus(reimbursement.reimbId, "DENIED");
                                        window.location.reload(); 
                                    }}>Denied</Dropdown.Item>

                                    <Dropdown.Item eventKey="Pending" onClick={async () => {
                                        await updateStatus(reimbursement.reimbId, "PENDING");
                                        window.location.reload(); 
                                    }}>Pending</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )

}