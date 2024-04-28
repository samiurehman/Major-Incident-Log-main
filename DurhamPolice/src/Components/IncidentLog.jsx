import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'; // Import Typography component from Material-UI

const IncidentLog = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/auth/Incidentlogs")
      .then((result) => {
        if (result.data.Status) {
          setLogs(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="px-5 mt-3">
      <div className="flex flex-col justify-center items-center mt-3"> {/* Adding container for Typography */}
        <Typography variant="overline" display="block" gutterBottom>
          As the officer in charge of the incident, it is your responsibility to
          accurately record all visits to/occurrences at the scene of the incident.
          It should be borne in mind that scene preservation is of the utmost
          importance. It may be necessary at a later stage to account
          for/eliminate all visitors to the scene. If that is the case, the police
          investigation will only be as comprehensive as your log allows it to be.
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          Ensure that all visitors to the scene state their reason for entering.
          Unnecessary access must be refused. In cases of difficulty contact your
          duty supervisor, or the crime scene manager in attendance.
        </Typography>
        <Typography
          variant="overline"
          display="block"
          sx={{ color: "red" }}
          gutterBottom
        >
          Protective clothing consisting of a disposable paper suit, gloves, and
          overshoes must be worn by all persons entering the crime scene at all
          times until the scene is released by the senior investigating officer.
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          This is an original document and should be passed on to the next officer
          detailed to complete the scene log, a record of this should be endorsed,
          as it occurs, on the scene log.
        </Typography>
      </div>
      
      <Link to="/dashboard/add_incidentlog" className="btn btn-success">
        Add Incident Log
      </Link>
    </div>
  );
};

export default IncidentLog;
