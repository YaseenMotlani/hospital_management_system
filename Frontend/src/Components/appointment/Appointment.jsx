import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Appointment = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [showModal, setShowModal] = useState(false);

  const [newAppointment, setNewAppointment] = useState({
          time: "",
          date: "",
          name: "",
          age: "",
          doctor: "",
  });

  const handleChange = (e) => {
        setNewAppointment({
            ...newAppointment,
            [e.target.name]: e.target.value,
        });
    };

  const appointments = {
    new: [
      { time: "9:30 AM", date: "05/12/2022", name: "Yaseen Motlani", age: 23, doctor: "DR.JOHN" },
      { time: "9:30 AM", date: "05/12/2022", name: "John David", age: 38, doctor: "DR.Joel" },
      { time: "10:30 AM", date: "05/12/2022", name: "Hania Aamir", age: 32, doctor: "DR.JOHN" },
    ],
    completed: [
      { time: "11:00 AM", date: "05/12/2022", name: "Abbas Hussain", age: 29, doctor: "DR.Joel", fee: "Paid" },
      { time: "11:00 AM", date: "05/12/2022", name: "EG Subramani", age: 77, doctor: "DR.JOHN", fee: "UnPaid" },
    ],
  };

  return (
    <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-3 mt-3">
          <h5
            className="fw-bold"
            style={{
              cursor: "pointer",
              borderBottom: activeTab === "new" ? "3px solid #0d6efd" : "none",
            }}
            onClick={() => setActiveTab("new")}
          >
            NEW APPOINTMENTS
          </h5>

          <h5
            className="fw-bold"
            style={{
              cursor: "pointer",
              borderBottom: activeTab === "completed" ? "3px solid #0d6efd" : "none",
            }}
            onClick={() => setActiveTab("completed")}
          >
            COMPLETED APPOINTMENTS
          </h5>
        </div>

        <button 
          className="btn btn-primary" 
          onClick={() => setShowModal(true)}
        >+ New Appointments</button>
      </div>

      <hr />

      {/* Search + Date */}
      <div className="d-flex gap-3 mt-3">
        <div
          className="d-flex align-items-center px-3"
          style={{
            background: "#eef6ff",
            borderRadius: "50px",
            width: "300px",
            border: "1px solid #d7e8ff",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="form-control border-0 bg-transparent shadow-none"
          />
        </div>

        <div
          className="d-flex align-items-center px-3"
          style={{
            border: "2px solid #4da3ff",
            borderRadius: "50px",
            width: "200px",
          }}
        >
          <input type="date" className="form-control border-0 shadow-none" />
        </div>
      </div>
      
      {/* New Appointment Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Add New Patient</h5>
                <button className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>

              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  type="time"
                  name="appointmentTime"
                  onChange={handleChange}
                />
                <input
                  className="form-control mb-2"
                  type="date"
                  name="appointmentDate"
                  onChange={handleChange}
                />
                <input
                  className="form-control mb-2"
                  name="name"
                  placeholder="Patient Name"
                  onChange={handleChange}
                />
                <input
                  className="form-control mb-2"
                  name="age"
                  placeholder="Age"
                  type="number"
                  onChange={handleChange}
                />
                <input
                  className="form-control mb-2"
                  name="doctor"
                  placeholder="Doctor Name"
                  onChange={handleChange}
                />
              </div>

              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-primary">
                  Save Patient
                </button>
              </div>

            </div>
          </div>
        </div>
      )}


      {/* Table */}
      <div className="table-responsive mt-4">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Time</th>
              <th>Date</th>
              <th>Patient Name</th>
              <th>Patient Age</th>
              <th>Doctor</th>

              {activeTab === "completed" && <th>Fee Status</th>}

              <th>User Action</th>
            </tr>
          </thead>

          <tbody>
            {/* NEW APPOINTMENTS */}
            {activeTab === "new" &&
              appointments.new.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>
                    <IoPersonCircleOutline size={25} className="me-2" />
                    {item.name}
                  </td>
                  <td>{item.age}</td>
                  <td>{item.doctor}</td>
                  <td style={{ color: "blue", cursor: "pointer" }}>
                    Reschedule
                  </td>
                </tr>
              ))}

            {/* COMPLETED APPOINTMENTS */}
            {activeTab === "completed" &&
              appointments.completed.map((item, index) => (
                <tr key={index}>
                  <td>{item.time}</td>
                  <td>{item.date}</td>
                  <td>
                    <IoPersonCircleOutline size={25} className="me-2" />
                    {item.name}
                  </td>
                  <td>{item.age}</td>
                  <td>{item.doctor}</td>
                  <td
                    style={{
                      color: item.fee === "Paid" ? "green" : "red",
                      fontWeight: "600",
                    }}
                  >
                    {item.fee}
                  </td>
                  <td style={{ color: "blue", cursor: "pointer" }}>
                    Request Fee
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* form */}
      


      {/* Pagination */}
      <div className="p-4 m-2">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <span className="page-link">Next</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Appointment;