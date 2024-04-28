import React, { useRef, useState } from "react";
import { Modal } from "antd";
import {
  Button as MatButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const AddIncidentLog = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);

  // Refs for form fields
  const logIdRef = useRef(null);
  const timeAndDateOfIncidentRef = useRef(null);
  const natureOfIncidentRef = useRef(null);
  const weatherConditionRef = useRef(null);
  const locationRef = useRef(null);
  const timeAndDateOfVisitRef = useRef(null);
  const detailsOfPersonRef = useRef(null);
  const reasonForAttendanceRef = useRef(null);
  const protectiveClothingWornRef = useRef(null);
  const officerCompletingLogRef = useRef(null);
  const leaveTimeRef = useRef(null);

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const logId = logIdRef.current.value;
    const timeAndDateOfIncident = timeAndDateOfIncidentRef.current.value;
    const natureOfIncident = natureOfIncidentRef.current.value;
    const weatherCondition = weatherConditionRef.current.value;
    const location = locationRef.current.value;
    const timeAndDateOfVisit = timeAndDateOfVisitRef.current.value;
    const detailsOfPerson = detailsOfPersonRef.current.value;
    const reasonForAttendance = reasonForAttendanceRef.current.value;
    const protectiveClothingWorn = protectiveClothingWornRef.current.value;
    const officerCompletingLog = officerCompletingLogRef.current.value;
    const leaveTime = leaveTimeRef.current.value;

    const incidentLogData = {
      logId,
      timeAndDateOfIncident,
      natureOfIncident,
      weatherCondition,
      location,
      timeAndDateOfVisit,
      detailsOfPerson,
      reasonForAttendance,
      protectiveClothingWorn,
      officerCompletingLog,
      leaveTime,
    };

    setRows((prevRows) => [...prevRows, incidentLogData]);
    setOpen(false);

    // Clear form fields
    handleClearForm();
  };

  const handleClearForm = () => {
    logIdRef.current.value = "";
    timeAndDateOfIncidentRef.current.value = "";
    natureOfIncidentRef.current.value = "";
    weatherConditionRef.current.value = "";
    locationRef.current.value = "";
    timeAndDateOfVisitRef.current.value = "";
    detailsOfPersonRef.current.value = "";
    reasonForAttendanceRef.current.value = "";
    protectiveClothingWornRef.current.value = "";
    officerCompletingLogRef.current.value = "";
    leaveTimeRef.current.value = "";
  };

  const handleEdit = (index) => {
    // Handle edit action
    console.log("Edit clicked for row:", index);
  };

  const handleDelete = (index) => {
    // Handle delete action
    console.log("Delete clicked for row:", index);
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Typography variant="h6" gutterBottom>
            Major Incident Log List
          </Typography>
        </div>
        <div>
          <MatButton
            variant="contained"
            sx={{
              bgcolor: "#4caf50",
              "&:hover": {
                bgcolor: "#388e3c",
              },
            }}
            onClick={() => setOpen(true)}
          >
            Add New Log
          </MatButton>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%] mt-[30px]">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 800 }}>Log ID</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Time & Date of Incident</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Nature of Incident</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Weather Condition</TableCell>
                <TableCell sx={{ fontWeight: 800 }}>Location</TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Name Of Person Visiting The Scene / Department Name
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Reason for Visit
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Protective Clothing Worn
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Officer Completing Log
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Leave Time
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 800 }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.logId}
                  </TableCell>
                  <TableCell>{row.timeAndDateOfIncident}</TableCell>
                  <TableCell>{row.natureOfIncident}</TableCell>
                  <TableCell>{row.weatherCondition}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell align="right">{row.detailsOfPerson}</TableCell>
                  <TableCell align="right">{row.reasonForAttendance}</TableCell>
                  <TableCell align="right">{row.protectiveClothingWorn}</TableCell>
                  <TableCell align="right">{row.officerCompletingLog}</TableCell>
                  <TableCell align="right">{row.leaveTime}</TableCell>
                  <TableCell align="right">
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
          title="Add Log"
          centered
          open={open}
          width={800}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
          >
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Log ID
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Log ID"
                name="logId"
                ref={logIdRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Time and Date of Incident
              </label>
              <input
                type="datetime-local"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="timeAndDateOfIncident"
                ref={timeAndDateOfIncidentRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Nature of Incident
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Nature of Incident"
                name="natureOfIncident"
                ref={natureOfIncidentRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Weather Condition
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Weather Condition"
                name="weatherCondition"
                ref={weatherConditionRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Location
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Location"
                name="location"
                ref={locationRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Name Of Person Visiting The Scene / Department Name
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name of Visitor"
                name="detailsOfPerson"
                ref={detailsOfPersonRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Reason for Visit
              </label>
              <textarea
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="The Purpose of Visit at the Incident scene..."
                name="reasonForAttendance"
                ref={reasonForAttendanceRef}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Time and Date of Visit
              </label>
              <input
                type="datetime-local"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="timeAndDateOfVisit"
                ref={timeAndDateOfVisitRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Protective Clothing Worn
              </label>
              <textarea
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Disposable Paper Suit, Gloves, Overshoes"
                name="protectiveClothingWorn"
                ref={protectiveClothingWornRef}
              ></textarea>
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Officer Completing Log
              </label>
              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Officer Name"
                name="officerCompletingLog"
                ref={officerCompletingLogRef}
                required
              />
            </div>
            <div className="mb-3">
              <label className="block mb-2 text-sm font-medium ">
                Leave Time
              </label>
              <input
                type="datetime-local"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="leaveTime"
                ref={leaveTimeRef}
              />
            </div>
            <button
              type="submit"
              className="text-black bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-[100%]"
            >
              Add New Log
            </button>
            <button
              type="button"
              className="text-black bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-600 ml-2"
              onClick={handleClearForm}
            >
              Clear Form
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default AddIncidentLog;





