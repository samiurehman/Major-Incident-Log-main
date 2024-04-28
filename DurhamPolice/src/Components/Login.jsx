import React, { useState } from "react";
import Axios from "axios";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3004/auth/adminlogin", values)
      .then(result => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true)
          navigate('/dashboard');
        } else {
          setError(result.data.Error); // Ensure correct field name for error message
        }
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className='d-flex justify-content-center align-items-center flex-column vh-100 loginPage'>
      <h1 className="title">DURHAM POLICE MAJOR INCIDENT LOG</h1> {/* Title */}
      <div className='p-3 rounded w-25 border loginForm'>
        <div className="text-danger">
          {error && error}
        </div>                                                    
        <h2>Admin Login </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email"><strong>Email:</strong></label>
            <input type="email" name='email' autoComplete='off' placeholder='Enter Email' value={values.email} onChange={(e) => setValues({...values, email: e.target.value})} className='form-control rounded-0'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="password"><strong>Password:</strong></label>
            <input type="password" name='password' placeholder='Enter Password' value={values.password} onChange={(e) => setValues({...values, password: e.target.value})} className='form-control rounded-0'/>
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
          <div className='mb-1'>
            <input type="checkbox" name="tick" id="tick" className='me-2'/>
            <label htmlFor="password">You Agree with Terms & Conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
