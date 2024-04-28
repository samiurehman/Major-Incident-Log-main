import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Profile from './Components/Profile';
import IncidentLog from './Components/IncidentLog';
import AddIncidentLog from './Components/AddIncidentLog';
import Start from './Components/Start';
import EmployeeLogin from './Components/EmployeeLogin';
import Employee from './Components/Employee';
import AddEmployee from './Components/AddEmployee';
import AllIncidentLog from './Components/AllIncidentLog';
import EmployeeDetail from './Components/EmployeeDetails';
import EditEmployee from './Components/EditEmployee';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/adminlogin" element={<Login />} />
        <Route path="/employee_login" element={<EmployeeLogin />} />
        <Route path="/dashboard/*" element={
          <PrivateRoute >
          <Dashboard />
        </PrivateRoute>
      }>
          <Route index element={<Home />} />
          <Route path="incidentlog/*" element={<IncidentLog />} /> 
          <Route path="allincidentlog/*" element={<AllIncidentLog />} />
          <Route path="add_incidentlog/*" element={<AddIncidentLog />} />
          <Route path="profile" element={<Profile />} />
          <Route path="employee" element={<Employee />} />
          <Route path="add_employee/*" element={<AddEmployee/>} />
          <Route path='edit_employee/:id' element={<EditEmployee />}></Route>
        </Route>
        <Route path='employee_detail/:id' element={<EmployeeDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;







