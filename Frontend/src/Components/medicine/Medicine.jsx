import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { RiDeleteBinFill } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";
import { BsCaretDownFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiMinimize2 } from "react-icons/fi";

const Medicine = () => {
    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">MEDICINE INVENTORY</h5>
                <button className="btn btn-primary">+ Add Product</button>
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
                    <IoSearch/>
                    <input
                        type="text"
                        placeholder="Search"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                    />
                </div>

                {/* Product type */}
                <div 
                    className="d-flex align-items-center px-3"
                    style={{
                        // background: "#eef6ff",
                        borderRadius: "50px",
                        width: "200px",
                        border: "1px solid #d7e8ff"
                    }}
                >
                    <input
                        type="text"
                        placeholder="Product Type"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                    />
                    <BsCaretDownFill/>
                    
                </div>

                {/* In Stock */}
                <div 
                    className="d-flex align-items-center px-3"
                    style={{
                        // background: "#eef6ff",
                        borderRadius: "50px",
                        width: "200px",
                        border: "1px solid #d7e8ff"
                    }}
                >
                    <input
                        type="text"
                        placeholder="In Stock"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                    />
                    <BsCaretDownFill/>
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

                {/* Manufacture */}
                <div 
                    className="d-flex align-items-center px-3"
                    style={{
                        // background: "#eef6ff",
                        borderRadius: "50px",
                        width: "200px",
                        border: "1px solid #d7e8ff"
                    }}
                >
                    <input
                        type="text"
                        placeholder="Manufacture"
                        className="form-control border-0 bg-transparent shadow-none"
                        style={{ outline: "none" }}
                    />
                    <BsCaretDownFill/>
                </div>

            </div>


            {/* Table */}
            <div className="table-responsive mt-4">
                <table className="table table-hover mt-3 align-middle">

                    <thead className="table-light">
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Price(per pack)</th>
                            <th scope="col">In Stock</th>
                            <th scope="col">Expiry Date</th>
                            <th scope="col">Manufacturer</th>
                            <th scope="col">User Action</th>
                        </tr>
                    </thead>

                    <tbody className="align-items-center">

                        {/* Row 1 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Albuterol (salbutamol)
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                ALSXCE00123
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Inhaler</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                28.55
                            </td>
                            <td>100pcs</td>
                            <td>01 jun 2024</td>
                            <td>John's Health Care</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 2 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Amoxicillin 250 mg
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                AMSXCE00143
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Tablet</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                40.55
                            </td>
                            <td>28pcs</td>
                            <td>21 jun 2024</td>
                            <td>Patrikson Pvt Ltd</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 3 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Aspirin 300 mg
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                ASPXCE00120
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Tablet</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                28.55
                            </td>
                            <td>190pcs</td>
                            <td>01 jun 2024</td>
                            <td>David's Ltd</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 4 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Benadryl 500 ml
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                SYPCBED0012
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Syrup</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                77.55
                            </td>
                            <td>80pcs</td>
                            <td>28 Apr 2025</td>
                            <td>Johnson & Johnson</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 5 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Bufexamac 100g
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                Cream
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Inhaler</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                70.55
                            </td>
                            <td>100pcs</td>
                            <td>01 jun 2024</td>
                            <td>Mickel's Lab</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 6 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                Cefixime 300 mg
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                CAPXUE00023
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Capsule</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                28.55
                            </td>
                            <td>100pcs</td>
                            <td>03 Feb 2025</td>
                            <td>John's Health Care</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
                        </tr>

                        {/* Row 7 */}
                        <tr>
                            <td>
                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-4">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="checkChecked"
                                        />
                                        <div className="d-flex flex-column">
                                            <label
                                                className="form-check-label"
                                                htmlFor="checkChecked"
                                            >
                                                KZ soap 250g
                                            </label>

                                            {/* Code exactly under label, aligned left */}
                                            <p className="text-muted m-0" style={{ fontSize: "12px" }}>
                                                SOPXUE00103
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </td>
        
                            <td>Soap</td>
                            <td>
                                <MdOutlineCurrencyRupee/>
                                250.55
                            </td>
                            <td>55pcs</td>
                            <td>08 Feb 2024</td>
                            <td>Joe Industries</td>
                            <td style={{ verticalAlign: "middle" }}>
                                <div className="d-flex gap-3 align-items-center">
                                    <button className="btn btn-sm btn-secondary"><LuNotepadText /></button>
                                    <button className="btn btn-sm btn-primary"><CiMedicalCross /></button>
                                    <button className="btn btn-sm btn-danger"><RiDeleteBinFill /></button>
                                </div>
                            </td>
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

export default Medicine;
