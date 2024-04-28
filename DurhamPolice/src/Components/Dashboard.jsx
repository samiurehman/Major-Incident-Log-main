//Dashboard.jsx
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';

const Dashboard = () => {
  const anvigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3004/auth/logout')
    .then(result => {
      if(result.data.Status) { 
        localStorage.removeItem("valid")
        anvigate('/')
      }
    })
  }
  return (
<div className="container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-dark"> {/* Adjusted width to col-md-4 */}
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link
          to="/dashboard"
          className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 fw-bolder d-none d-sm-inline">
            MANU
          </span>
        </Link>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
            <li className="w-100">
              <Link
                to="/dashboard"
                className="nav-link text-white px-0 align-middle"
              >
                <i className="fs-4 bi-speedometer2 ms-2"></i>
                <span className="ms-2 d-none d-sm-inline">Dashboard</span>
              </Link>
            </li>
              <li className="w-100">
                <Link
                  to="Incidentlog"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Inicdent Log
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/allincidentlog"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">All Incident Log</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i> 
                  <span className='ms-2 d-none d-sm-inline'>
                    Profile</span>
                </Link>
              </li>
              <li className="w-100"onClick={handleLogout}>
                <button 
                  className="nav-link text-white px-0 align-middle" 
                  onClick={handleLogout}
                >
                  <i className="fs-4 bi-box-arrow-right ms-2"></i> 
                  <span className='ms-2 d-none d-sm-inline'>Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4> MAJOR INCIDENT LOG</h4>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
