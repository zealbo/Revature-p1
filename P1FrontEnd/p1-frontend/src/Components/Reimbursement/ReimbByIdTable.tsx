import axios from "axios";
import { Button, Container, Dropdown, DropdownButton, Table } from "react-bootstrap"

export const ReimbByIdTable:React.FC<{reimbursements:any[]}> = ({reimbursements}) => {

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
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )

}