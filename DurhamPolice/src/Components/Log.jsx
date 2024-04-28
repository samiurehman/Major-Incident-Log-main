import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Log = () => {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3004/auth/logs")
      .then((result) => {
        if (result.data.Status) {
          setLogs(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3004/auth/delete_log/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Log List</h3>
      </div>
      <Link to="/dashboard/add_log" className="btn btn-success">
        Add Log
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Date of Incident</th>
              <th>Nature of Incident</th>
              <th>Wather Condition</th>
              <th>Location Of Incident</th>
              <th>Date And Time of Visit</th>
              <th>Details of Person</th>
              <th>Reason for Attacdence</th>
              <th>Protective Clothing Worn</th>
              <th>Officer Completing Log</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr key={log.id}>
                <td>{log.date}</td>
                <td>{log.location}</td>
                <td>{log.details}</td>
                <td>
                  <Link
                    to={`/dashboard/edit_log/${log.id}`}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(log.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Log;
