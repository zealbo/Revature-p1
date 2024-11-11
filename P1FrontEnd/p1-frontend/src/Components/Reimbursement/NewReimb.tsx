import axios from "axios";
import { useState } from "react";
import { Button, Container, Dropdown, DropdownButton, Table } from "react-bootstrap"
import { store } from "../../globalData/store"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export const NewReimbursement:React.FC = () => {

    interface FormData {
        amount: number;
        description: string;
        status: string;
        userId: number;
      }

    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>('');

    const createReimbursement = async (data: FormData) => {
        const response = await axios.post("http://localhost:7878/reimbursements", data);    
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission (page refresh)
    
        const data: FormData = {
          amount,
          description,
          status: "PENDING",
          userId: store.loggedInUser.userId
        };
    
        await createReimbursement(data);
        alert("Reimbursement Submitted!");
          // Optionally reset the form or handle submission success here
        setAmount(0); // Clear the amount input
        setDescription(''); // Clear the description input
    };

    const navigate = useNavigate();

    return(
        <div>
            <h3>Create New Reimbursement</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="amountInput">Amount:</label>
                <input type="number" id="amountInput" name="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required/>

                <br /><br />

                <label htmlFor="descriptionInput">Description:</label>
                <input type="description" id="descriptionInput" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required/>

                <br /><br />

                <Button type="submit">Submit</Button>
            </form>
            <br />
            <Button onClick={()=>navigate(-1)}>Back</Button>
        </div>
    )

}