import axios from "axios";
import { Button, Container, Dropdown, DropdownButton, Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const EmpTable:React.FC<{users:any[]}> = ({users}) => {

    const deleteUser = async (id: number) => {
        const response = await axios.delete("http://localhost:7878/users/" + id);    
    };

    const navigate = useNavigate();

    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>username</th>
                        <th>Role/Terminate</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user:any) => (
                        <tr>
                            <td>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>
                                {/* Dropdown Menu */}
                                <DropdownButton
                                    id={`dropdown-${user.userId}`}
                                    title={`${user.role}`}
                                >
                                    <Dropdown.Item onClick={async () => {
                                        await deleteUser(user.userId);
                                        window.location.reload(); 
                                    }}>Terminate</Dropdown.Item>
                                </DropdownButton>
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