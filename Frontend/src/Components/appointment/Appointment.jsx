import React from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoInformationSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

const Appointment = () => {
    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 mt-3">
                    <h5 className="fw-bold">NEW APPOINTMENTS</h5>
                    <h5 className="fw-bold">COMPLETED APPOINTMENTS</h5>
                </div>
                <button className="btn btn-primary">+ New Appointments</button>
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


            {/* Table */}
            <div className="table-responsive mt-4">
                <table className="table table-hover mt-3 align-middle">

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Patient Age</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Fee Status</th>
                            <th scope="col">User Action</th>
                        </tr>
                    </thead>

                    <tbody className="align-items-center">

                        {/* Row 1 */}
                        <tr>
                            <td>9:30 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Yaseen Motlani
                            </td>
                            <td>23</td>
                            <td>DR.JOHN</td>
                            <td style={{color: "#228B22" }}>Paid</td>
                            <td>Request Fee</td>
                        </tr>

                        {/* Row 2 */}
                        <tr>
                            <td>9:30 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                John David
                            </td>
                            <td>38</td>
                            <td>DR.Joel</td>
                            <td style={{color: "Red"}}>UnPaid</td>
                            <td style={{color: "blue"}}>Request Fee</td>
                        </tr>

                        {/* SAME ROWS CONTINUE (unchanged) */}
                        <tr>
                            <td>10:30 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Hania Aamir
                            </td>
                            <td>32</td>
                            <td>Dr.John</td>
                            <td style={{color: "#228B22" }}>Paid</td>
                            <td>Request Fee</td>
                        </tr>

                        <tr>
                            <td>11:00 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Abbas Hussain
                            </td>
                            <td>29</td>
                            <td>DR.Joel</td>
                            <td style={{color: "Red"}}>UnPaid</td>
                            <td style={{color: "blue"}}>Request Fee</td>
                        </tr>

                        <tr>
                            <td>11:00 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                EG Subramani
                            </td>
                            <td>77</td>
                            <td>DR.JOHN</td>
                            <td style={{color: "Red"}}>UnPaid</td>
                            <td style={{color: "blue"}}>Request Fee</td>
                        </tr>

                        <tr>
                            <td>11:00 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Ranjan Maari
                            </td>
                            <td>65</td>
                            <td>DR.Joel</td>
                            <td style={{color: "Red"}}>UnPaid</td>
                            <td style={{color: "blue"}}>Request Fee</td>
                        </tr>

                        <tr>
                            <td>9:30 AM</td>
                            <td>05/12/2022</td>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Affifa Khan
                            </td>
                            <td>22</td>
                            <td>DR.JonEila</td>
                            <td style={{color: "#228B22" }}>Paid</td>
                            <td>Request Fee</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Page Number */}
            <div className="p-4 m-2">
                <nav aria-label="Page navigation example ">
                    <ul class="pagination justify-content-end">
                        <li class="page-item disabled">
                        <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Appointment;
