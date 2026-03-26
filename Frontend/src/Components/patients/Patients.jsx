import React, { useEffect, useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoInformationSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { useAuth } from "../auth/AuthContext";


const Patient = () => {
    const [showModal, setShowModal] = useState(false);
    const { token } = useAuth();

    const [newPatient, setNewPatient] = useState({
        name: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phone: "",
        email: "",
    }); 

    // Pages
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const patientsPerPage = 6;

    const [editPatientId, setEditPatientId] = useState(null);

    // CHANGED: patients list state (table data)
    const [Patients, setPatients] = useState([]);
    const [errors, setErrors] = useState({});

    // CHANGED: fetch patient on page load
    useEffect(() => {
        fetchPatients();
    }, []);

    // CHANGED: GET API
    const fetchPatients = async () => {
    try {
        const res = await fetch("https://hospital-management-system-qf91.onrender.com/api/patient", {
            headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
        const data = await res.json();
        console.log("API RESPONSE:", data);  
        setPatients(data.data || data);     
    } catch (err) {
        console.error(err);
    }
    };

         // 🔎 Live Search Filter
        const filteredPatients = Patients.filter((doc) =>
            doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // 📄 Pagination Logic
        const indexOfLastPatient = currentPage * patientsPerPage;
        const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
        const currentPatients = filteredPatients.slice(
            indexOfFirstPatient,
            indexOfLastPatient
        );

        const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

    // CHANGED: form change handler
    const handleChange = (e) => {
        const { name, value } = e.target;

        setNewPatient({
            ...newPatient,
            [name]: value,
            // [e.target.name]: e.target.value,
        });

        let errorMessage = "";

        if (!value.trim()) {
            errorMessage = "This field is required";
        }

        if (name === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailPattern.test(value)) {
                errorMessage = "Invalid email format";
            }
        }

        if (name === "phone") {
            if (value && value.length !== 10) {
                errorMessage = "Number must be 10 digits";
            }
        }

        setErrors({
            ...errors,
            [name]: errorMessage,
        });
    };


    // CHANGED: Valid Form Fill
    const validateForm = () => {
        const { name, age, gender, bloodGroup, phone, email } = newPatient;
    
        if (!name || !age || !gender || !bloodGroup || !phone || !email) {
            Swal.fire({
                icon: "error",
                title: "All fields are required!",
                text: "Please fill all fields before saving.",
            });
            return false;
        }
    
        if (phone.length !== 10) {
            Swal.fire({
                icon: "error",
                title: "Invalid Contact Number",
                text: "Contact number must be 10 digits.",
            });
            return false;
        }
    
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address.",
            });
            return false;
        }
    
        return true;
    };
    
    // CHANGED: Save patient -> POST -> Get
    const handleSavePatient = async () => {

        if (Object.values(errors).some(error => error)) {
            Swal.fire({
                icon: "error",
                title: "Please fix form errors first!",
            });
            return;
        }

        if (!validateForm()) return;

        try{
            if (editPatientId) {
                await fetch(
                    `https://hospital-management-system-qf91.onrender.com/api/update-patient/${editPatientId}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify(newPatient),
                    }
                );

                Swal.fire({
                    icon: "success",
                    title: "Patient Updated Successfully 🎉",
                    showConfirmButton: false,
                    timer: 1500,
                });

            } else {
                await fetch("https://hospital-management-system-qf91.onrender.com/api/add-patient", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(newPatient),
                });

                Swal.fire({
                    icon: "success",
                    title: "Patient Added Successfully 🎉",
                    showConfirmButton: false,
                    timer: 1500,
                });
                    console.log("API CALLED");
            }

            await fetchPatients();
            setShowModal(false);
            setEditPatientId(null);

            // reset form
            setNewPatient({
                name: "",
                age: "",
                gender: "",
                bloodGroup: "",
                phone: "",
                email: "",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Something went wrong!",
                text: "Please try again.",
            });
        }
    };

    // CHANGED: Delete patient -> DELETE
    const handleDeletePatient = async (id) => {
    
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "This patient will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });
    
        if (result.isConfirmed) {
            await fetch(`https://hospital-management-system-qf91.onrender.com/api/delete-patient/${id}`, {
               method: "DELETE",
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
    
            Swal.fire(
                "Deleted!",
                "Patient has been deleted.",
                "success"
            );
    
            fetchPatients();
        }
    };
    
    // CHANGED: Update Patient -> UPDATE
    const handleEditPatient = (patient) => {
        setNewPatient({ ...patient }); //  new copy
        setEditPatientId(patient._id);
        setShowModal(true);
    }


    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">Patient Info</h5>
                <button 
                    className="btn btn-primary" 
                    onClick={() => setShowModal(true)}
                >+ New Patient</button>
            </div>

            <hr />

            {/* Search + Filter */}
            <div className="d-flex gap-3 mt-3">

                {/* Search Bar */}
                <div 
                    className="d-flex align-items-center px-3"
                    style={{
                        background: "#eef6ff",
                        borderRadius: "50px",
                        width: "300px",
                        border: "1px solid #d7e8ff"
                    }}
                >
                    <i className="bi bi-search me-2" style={{ color: "#7a9cc4" }}></i>
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1); // reset page on search
                        }}
                    />
                </div>

                {/* Filter by Date */}
                <div
                    className="d-flex align-items-center px-3"
                    style={{
                        border: "2px solid #4da3ff",
                        borderRadius: "50px",
                        width: "200px",
                        cursor: "pointer"
                    }}
                >
                    <input
                        type="date"
                        className="form-control border-0 shadow-none"
                        style={{ background: "transparent", cursor: "pointer" }}
                    />
                </div>

            </div>

            {/* New Patient Modal */}
            {showModal && (
                <div
                    className="modal fade show d-block"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content shadow-lg rounded-4">

                        {/* Modal Header */}
                        <div className="modal-header bg-success text-white rounded-top-4">
                        <h5 className="modal-title">
                            {editPatientId ? "Update Patient Details" : "Add New Patient"}
                        </h5>
                        <button
                            className="btn-close btn-close-white"
                            onClick={() => setShowModal(false)}
                        ></button>
                        </div>

                        {/* Modal Body */}
                        <div className="modal-body px-4 py-3">
                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label className="form-label">Patient Name</label>
                                    <input
                                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                        name="name"
                                        value={newPatient.name}
                                        onChange={handleChange}
                                        placeholder="Enter patient name"
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className={`form-control ${errors.age ? "is-invalid" : ""}`}
                                        name="age"
                                        value={newPatient.age}
                                        onChange={handleChange}
                                        placeholder="Age"
                                    />
                                    {errors.age && (
                                        <div className="invalid-feedback">{errors.age}</div>
                                    )}
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Gender</label>
                                    <select
                                        className={`form-control ${errors.gender ? "is-invalid" : ""}`}
                                        name="gender"
                                        value={newPatient.gender}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                    {errors.gender && (
                                        <div className="invalid-feedback">{errors.gender}</div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Blood Group</label>
                                    <input
                                        className={`form-control ${errors.bloodGroup ? "is-invalid" : ""}`}
                                        name="bloodGroup"
                                        value={newPatient.bloodGroup}
                                        onChange={handleChange}
                                        placeholder="e.g. A+, O-"
                                    />
                                    {errors.bloodGroup && (
                                        <div className="invalid-feedback">{errors.bloodGroup}</div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Phone Number</label>
                                    <input
                                        className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                                        name="phone"
                                        value={newPatient.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />
                                    {errors.phone && (
                                        <div className="invalid-feedback">{errors.phone}</div>
                                    )}
                                </div>

                                <div className="col-md-12">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        name="email"
                                        value={newPatient.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-success px-4"
                            onClick={handleSavePatient}
                        >
                            {editPatientId ? "Update Patient" : "Save Patient"}
                        </button>
                        </div>

                    </div>
                    </div>
                </div>
            )}


            {/* Table */}
            <div className="table-responsive mt-4">
                <table className="table table-hover mt-3 align-middle">

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">User Action</th>
                        </tr>
                    </thead>

                    <tbody className="align-items-center">

                        {currentPatients.map((pat) => (
                            <tr key={pat._id}>
                                <td><IoPersonCircleOutline/> {pat.name} </td>
                                <td>{ pat.age }</td>
                                <td> { pat.gender }</td>
                                <td> { pat.bloodGroup }</td>
                                <td> { pat.phone }</td>
                                <td> { pat.email }</td>
                                <td className="d-flex gap-3">
                                    <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                    <button 
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDeletePatient(pat._id)}
                                    >
                                        <RxCross2 />
                                    </button>
                                    <button 
                                        className="btn btn-sm btn-info text-white"
                                        onClick={() => handleEditPatient(pat)}
                                    >
                                        <IoInformationSharp />
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {/* Row 1
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Yaseen Motlani
                            </td>
                            <td>23</td>
                            <td>Male</td>
                            <td>O+</td>
                            <td>+919309565440</td>
                            <td>yaseen@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr> */}

                        
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination">

                            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                >
                                    Previous
                                </button>
                            </li>

                            {[...Array(totalPages)].map((_, index) => (
                                <li
                                    key={index}
                                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                                >
                                    <button
                                        className="page-link"
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages || totalPages === 0 ? "disabled" : ""}`}>
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </li>

                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    );
};

export default Patient;
