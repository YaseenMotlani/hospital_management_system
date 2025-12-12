import React from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoInformationSharp } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";

const Patient = () => {
    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">Patient Info</h5>
                <button className="btn btn-primary">+ New Patient</button>
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

                        {/* Row 1 */}
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
                        </tr>

                        {/* Row 2 */}
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                John David
                            </td>
                            <td>28</td>
                            <td>Male</td>
                            <td>B+</td>
                            <td>+919309688741</td>
                            <td>Johndavid@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        {/* SAME ROWS CONTINUE (unchanged) */}
                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Saniya Memon
                            </td>
                            <td>22</td>
                            <td>Male</td>
                            <td>A+</td>
                            <td>+919258746398</td>
                            <td>saniyamemon@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Ranjan Maari
                            </td>
                            <td>77</td>
                            <td>Male</td>
                            <td>O+</td>
                            <td>+919385647289</td>
                            <td>ranjanmaari@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Afreen Khan
                            </td>
                            <td>25</td>
                            <td>Female</td>
                            <td>A+</td>
                            <td>+919865428738</td>
                            <td>afreenkhan@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                farhana Bhat
                            </td>
                            <td>29</td>
                            <td>Female</td>
                            <td>B+</td>
                            <td>+919309455698</td>
                            <td>farhanabhat@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>

                        <tr>
                            <td className="align-items-center gap-3">
                                <IoPersonCircleOutline size={25}  className="me-2" />
                                Chota Don
                            </td>
                            <td>23</td>
                            <td>Male</td>
                            <td>B+</td>
                            <td>+919365874256</td>
                            <td>chotadon@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-primary"><TbMessageCircleFilled /></button>
                                <button className="btn btn-sm btn-danger"><RxCross2 /></button>
                                <button className="btn btn-sm btn-info text-white"><IoInformationSharp /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Patient;
