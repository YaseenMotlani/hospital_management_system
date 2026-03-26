                                                                                                                                                    
import React, { useEffect, useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoInformationSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { useAuth } from "../auth/AuthContext";


const Doctor = () => {
    const [showModal, setShowModal] = useState(false);
    
        const [newDoctor, setNewDoctor] = useState({
            name: "",
            qualifications: "",
            specialist: "",
            experience: "",
            contact: "",
            email: "",
        });

        // Pages
        const [searchTerm, setSearchTerm] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const doctorsPerPage = 6;


        const [editDoctorId, setEditDoctorId] = useState(null);
    
         // CHANGED: doctors list state (table data)
        const [doctors, setDoctors] = useState([]);
        const { token } = useAuth();
        const [errors, setErrors] = useState({});


        // CHANGED: fetch doctors on page load
        // useEffect(() => {
        //     fetchDoctors();
        // }, []);

        useEffect(() => {
            if (token) {
                fetchDoctors();
            }
        }, [token]);

        //  CHANGED: GET API
        const fetchDoctors = async () => {
            try{

                const res = await fetch("http://localhost:8080/api/doctor", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                
                const data = await res.json();

                if (res.ok) {
                    setDoctors(data.data);  // backend ka data
                } else {
                    console.log(data.message);
                }

            } catch (error) {
                console.log(error.message);
            }
            
            // setDoctors(data.data);
        };

        // 🔎 Live Search Filter
        const filteredDoctors = doctors.filter((doc) =>
            doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.specialist.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.email.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // 📄 Pagination Logic
        const indexOfLastDoctor = currentPage * doctorsPerPage;
        const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
        const currentDoctors = filteredDoctors.slice(
            indexOfFirstDoctor,
            indexOfLastDoctor
        );

        const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);


        // CHANGED: form change handler
        // const handleChange = (e) => {
        //     setNewDoctor({
        //     ...newDoctor,
        //     [e.target.name]: e.target.value,
        //     });
        // };

        const handleChange = (e) => {
            const { name, value } = e.target;

            setNewDoctor({
                ...newDoctor,
                [name]: value,
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

            if (name === "contact") {
                if (value && value.length !== 10) {
                    errorMessage = "Contact must be 10 digits";
                }
            }

            setErrors({
                ...errors,
                [name]: errorMessage,
            });
        };


        // CHANGED: Valid Form Fill
        const validateForm = () => {
            const { name, qualifications, specialist, experience, contact, email } = newDoctor;

            if (!name || !qualifications || !specialist || !experience || !contact || !email) {
                Swal.fire({
                    icon: "error",
                    title: "All fields are required!",
                    text: "Please fill all fields before saving.",
                });
                return false;
            }

            if (contact.length !== 10) {
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

        // CHANGED: Save doctor → POST + GET
        const handleSaveDoctor = async () => {

            if (Object.values(errors).some(error => error)) {
                Swal.fire({
                    icon: "error",
                    title: "Please fix form errors first!",
                });
                return;
            }


            if (!validateForm()) return;

            try {
                if (editDoctorId) {
                    await fetch(
                        `http://localhost:8080/api/update-doctor/${editDoctorId}`,
                        {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(newDoctor),
                        }
                    );

                    Swal.fire({
                        icon: "success",
                        title: "Doctor Updated Successfully 🎉",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                } else {
                    await fetch("http://localhost:8080/api/add-doctor", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newDoctor),
                    });

                    Swal.fire({
                        icon: "success",
                        title: "Doctor Added Successfully 🎉",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

                fetchDoctors();
                setShowModal(false);
                setEditDoctorId(null);

                // reset form
                setNewDoctor({
                    name: "",
                    qualifications: "",
                    specialist: "",
                    experience: "",
                    contact: "",
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


        
        // CHANGED: Delete Doctor -> DELETE
        // const handleDeleteDoctor = async (id) => {
        //     if (!window.confirm("Are you sure oyu want to delete this doctor?")) return;

        //     await fetch(`http://localhost:8080/api/delete-doctor/${id}`,{
        //         method: "DELETE"
        //     });

        //     fetchDoctors();
        // }

        const handleDeleteDoctor = async (id) => {

            const result = await Swal.fire({
                title: "Are you sure?",
                text: "This doctor will be permanently deleted!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!",
            });

            if (result.isConfirmed) {
                await fetch(`http://localhost:8080/api/delete-doctor/${id}`, {
                    method: "DELETE",
                });

                Swal.fire(
                    "Deleted!",
                    "Doctor has been deleted.",
                    "success"
                );

                fetchDoctors();
            }
        };


        // CHANGED: Update Doctor -> UPDATE
        const handleEditDoctor = (doctor) => {
            setNewDoctor(doctor); // form me existing data bhar do
            setEditDoctorId(doctor._id);
            setShowModal(true);
        }

        

    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">Doctors Detail</h5>
                <button 
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}    
                >+ Add Doctor</button>
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
                        placeholder="Search Doctor"
                        className="form-control border-0 bg-transparent shadow-none"
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

            {/* New Doctor Modal */}
            {showModal && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                >
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content rounded-4 shadow">

                        {/* HEADER */}
                        <div className="modal-header bg-success text-white rounded-top-4">
                        <h5 className="modal-title">
                            {editDoctorId ? "Update Doctor Details" : "Add New Doctor"}
                        </h5>
                        <button
                            className="btn-close btn-close-white"
                            onClick={() => setShowModal(false)}
                        ></button>
                        </div>

                        {/* BODY */}
                        <div className="modal-body px-4 py-3">
                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label className="form-label">Doctor Name</label>
                                    <input
                                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                        name="name"
                                        value={newDoctor.name}
                                        placeholder="Enter full name"
                                        onChange={handleChange}
                                    />
                                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Qualification</label>
                                    <input
                                        className={`form-control ${errors.qualifications ? "is-invalid" : ""}`}
                                        name="qualifications"
                                        value={newDoctor.qualifications}
                                        placeholder="MBBS, MD, etc."
                                        onChange={handleChange}
                                    />
                                    {errors.qualifications && (
                                        <div className="invalid-feedback">{errors.qualifications}</div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Specialization</label>
                                    <input
                                        className={`form-control ${errors.specialist ? "is-invalid" : ""}`}
                                        name="specialist"
                                        value={newDoctor.specialist}
                                        placeholder="Cardiologist, Neurologist..."
                                        onChange={handleChange}
                                    />
                                    {errors.specialist && (
                                        <div className="invalid-feedback">{errors.specialist}</div>
                                    )}
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Experience (Years)</label>
                                    <input
                                        className={`form-control ${errors.experience ? "is-invalid" : ""}`}
                                        name="experience"
                                        value={newDoctor.experience}
                                        placeholder="e.g. 5"
                                        type="number"
                                        onChange={handleChange}
                                    />
                                    {errors.experience && (
                                        <div className="invalid-feedback">{errors.experience}</div>
                                    )}
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Contact Number</label>
                                    <input
                                        className={`form-control ${errors.contact ? "is-invalid" : ""}`}
                                        name="contact"
                                        value={newDoctor.contact}
                                        placeholder="10-digit number"
                                        type="tel"
                                        onChange={handleChange}
                                    />
                                    {errors.contact && (
                                        <div className="invalid-feedback">{errors.contact}</div>
                                    )}
                                </div>

                                <div className="col-md-6">
                                    <label className="form-label">Email Address</label>
                                    <input
                                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                        name="email"
                                        value={newDoctor.email}
                                        placeholder="doctor@mail.com"
                                        type="email"
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>

                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="modal-footer px-4">
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className="btn btn-success px-4"
                            onClick={handleSaveDoctor}
                        >
                            {editDoctorId ? "Update Doctor" : "Save Doctor"}
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
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Qualification</th>
                            <th scope="col">Specialist</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">User Action</th>
                        </tr>
                    </thead>

                    <tbody className="align-items-center">

                        {currentDoctors.map((doc) => (
                            <tr key={doc._id}>
                            <td><IoPersonCircleOutline /> {doc.name}</td>
                            <td>{doc.qualifications}</td>
                            <td>{doc.specialist}</td>
                            <td>{doc.experience}</td>
                            <td>{doc.contact}</td>
                            <td>{doc.email}</td>
                            {/*  USER ACTION ICONS */}
                            <td className="d-flex gap-2">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                {/* DELETE */}
                                <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDeleteDoctor(doc._id)}
                                >
                                    <RxCross2 />
                                </button>

                                {/* UPDATE */}
                                <button
                                    className="btn btn-sm btn-info text-white"
                                    onClick={() => handleEditDoctor(doc)}
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
                                Dr.Fazal Vanjara
                            </td>
                            <td>MBBS, MD(Medicine)</td>
                            <td style={{color: "blue"}}>Physician</td>
                            <td>10 Years</td>
                            <td>+919309565440</td>
                            <td>fazalv@gmail.com</td>
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


export default Doctor;