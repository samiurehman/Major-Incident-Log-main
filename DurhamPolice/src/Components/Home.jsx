import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [incidentlogTotal, setIncidentLogTotal] = useState(0);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdminTotal();
    fetchEmployeeTotal();
    fetchIncidentLogTotal();
    fetchAdminRecords();
  }, []);

  const fetchAdminRecords = () => {
    axios.get('http://localhost:3004/auth/admin_records')
      .then(result => {
        if (result.data.Status) {
          setAdmins(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(error => console.error('Error fetching admin records:', error));
  };

  const fetchAdminTotal = () => {
    axios.get('http://localhost:3004/auth/admin_count')
      .then(result => {
        if (result.data.Status) {
          setAdminTotal(result.data.Result[0].admin);
        }
      })
      .catch(error => console.error('Error fetching admin total:', error));
  };

  const fetchEmployeeTotal = () => {
    axios.get('http://localhost:3004/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setEmployeeTotal(result.data.Result[0].employee);
        }
      })
      .catch(error => console.error('Error fetching employee total:', error));
  };

  const fetchIncidentLogTotal = () => {
    axios.get('http://localhost:3004/auth/incident_log_count')
      .then(result => {
        if (result.data.Status) {
          setIncidentLogTotal(result.data.Result[0].incidentLog);
        } else {
          alert(result.data.Error);
        }
      })
      .catch(error => console.error('Error fetching incident log total:', error));
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3004/auth/delete_admin/" + id).then((result) => {
      if (result.data.Status) {
        setEmployee(admins.filter((admin) => admin.id !== id)); // Fixed variable name
        alert(result.data.Error);
      }
    });
  };


  return (
    <div>
      <img src="/Durham-Police.png" alt='Durham Police' className='img-fluid' style={{ height: '70vh', width: '100%' }} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className='card mb-3 bg-info text-white'>
              <div className='card-body'>
                <h5 className='card-title'>Admin</h5>
                <hr />
                <div className='d-flex justify-content-between'>
                  <h6>Total:</h6>
                  <h6>{adminTotal}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='card mb-3 bg-warning text-white'>
              <div className='card-body'>
                <h5 className='card-title'>Employee</h5>
                <hr />
                <div className='d-flex justify-content-between'>
                  <h6>Total:</h6>
                  <h6>{employeeTotal}</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className='card mb-3 bg-success text-white'>
              <div className='card-body'>
                <h5 className='card-title'>Incident Log</h5>
                <hr />
                <div className='d-flex justify-content-between'>
                  <h6>Total:</h6>
                  <h6>{incidentlogTotal}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='text-center'>List of Admins</h3>
          <table className='table'>
            
            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>{admin.email}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;





