import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './Components/LoginRegister/Login';
import { Manager } from './Components/User/Manager';
import { Register } from './Components/LoginRegister/Register';
import { ReimbTable } from './Components/Reimbursement/ReimbTable';
import { ReimbursementContainer } from './Components/Reimbursement/ReimbContainer';
import { PendingReimbursementContainer } from './Components/Reimbursement/PendingReimbContainer';
import { EmployeeContainer } from './Components/Employee/EmpContainer';
import { NewReimbursement } from './Components/Reimbursement/NewReimb';
import { ReimbursementByIdContainer } from './Components/Reimbursement/ReimbByIdContainer';
import { PendingReimbursementsByIdContainer } from './Components/Reimbursement/PendingReimbByIdContainer';
import { Employee } from './Components/User/Employee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/managers" element={<Manager/>}/>
          <Route path="/employees" element={<Employee/>}/>
          <Route path="/AllReimbursements" element={<ReimbursementContainer/>}/>
          <Route path="/PendingReimbursements" element={<PendingReimbursementContainer/>}/>
          <Route path="/AllEmployees" element={<EmployeeContainer/>}/>
          <Route path="/NewReimbursement" element={<NewReimbursement/>}/>
          <Route path="/YourReimbursements" element={<ReimbursementByIdContainer/>}/>
          <Route path="/YourPendingReimbursements" element={<PendingReimbursementsByIdContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
