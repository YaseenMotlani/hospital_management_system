import React, { useEffect, useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { CiMedicalCross } from "react-icons/ci";
import { RiDeleteBinFill } from "react-icons/ri";
import { LuNotepadText } from "react-icons/lu";
import { BsCaretDownFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FiMinimize2 } from "react-icons/fi";

const Medicine = () => {
    const [showModal, setShowModal] = useState(false);
    
        const [newMedicine, setNewMedicine] = useState({
            name: "",
            code: "",
            type: "",
            price: "",
            stock: "",
            expiry: "",
            manufacture: "",
        });

        const [editMedicineId, setEditMedicineId] = useState(null)
    
        const [medicine, setMedicine] = useState([]);

        // fetch medicine on page load
        useEffect(() => {
            fetchMedicine();
        }, []);

        // Get Api
        const fetchMedicine = async () => {
            try{
                const res = await fetch("http://localhost:8080/api/medicine");
                const data = await res.json();
                console.log("API RESPONSE:", data);
                setMedicine(data.data || data);
            } catch(err){
                console.log(err);
            }
        }
        // form change handler
        const handleChange = (e) => {
            setNewMedicine({
                ...newMedicine,
                [e.target.name]: e.target.value,
            });
        };

        // save medicine->  Post -> Get
        const handlerSaveMedicine = async () => {
            if (editMedicineId) {
                await fetch(
                    `http://localhost:8080/api/update-medicine/${editMedicineId}`,
                    {
                        method: "PUT",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(newMedicine),
                    }
                );
            } else {
                await fetch(
                    `http://localhost:8080/api/add-medicine`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(newMedicine),
                    }
                );
                console.log("API CALLED");
            }

            await fetchMedicine();
            setShowModal(false);
            setEditMedicineId(null);
        }

        const handleDeleteMedicine = async (id) => {
        if (!window.confirm("Are You Sure Want to Delete this Medicine?")) return;

        await fetch(`http://localhost:8080/api/delete-medicine/${id}`, {
            method: "DELETE"
        });

        fetchMedicine();
    }

    const handleEditMedicine = (medicine) => {
        setNewMedicine({ ...medicine });
        setEditMedicineId(medicine._id);
        setShowModal(true);
    }


    return (
        <div className="w-100 shadow-sm rounded p-4 ms-2 bg-white">

            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold">MEDICINE INVENTORY</h5>
                <button 
                    className="btn btn-primary"
                    onClick={() => setShowModal(true)}    
                >+ Add Product</button>
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
            
            {/* New Patient Modal */}
            {showModal && (
                <div className="modal fade show d-block" style={{ background: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                        <h5 className="modal-title">
                            {editMedicineId ? "Update Medicine" : "Add New Medicine"}
                        </h5>
                        <button className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <div className="modal-body">
                        <input
                            className="form-control mb-2"
                            name="name"
                            value={newMedicine.name}
                            placeholder="Product Name"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="code"
                            value={newMedicine.code}
                            placeholder="Product Code"
                            onChange={handleChange}
                        />
                        <select
                            className="form-control mb-2"
                            name="type"
                            value={newMedicine.type}
                            onChange={handleChange}
                        >
                            <option value="">Select Medicine</option>
                            <option>Inhaler</option>
                            <option>Tablet</option>
                            <option>Syrup</option>
                            <option>Capsule</option>
                        </select>
                        <input
                            className="form-control mb-2"
                            name="price"
                            value={newMedicine.price}
                            placeholder="Price"
                            type="number"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="stock"
                            value={newMedicine.stock}
                            placeholder="In Stock"
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mb-2"
                            name="expiry"
                            value={newMedicine.expiry}
                            type="date"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-2"
                            name="manufacture"
                            value={newMedicine.manufacture}
                            placeholder="Manufacture"
                            onChange={handleChange}
                        />
                        </div>

                        <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </button>
                        <button className="btn btn-primary"
                            onClick={handlerSaveMedicine}>
                            Save Medicine
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
                        {medicine.map((mad) => (
                            <tr key={mad._id}>
                                <td>
                                    <div className="d-flex align-items-center gap-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <div>
                                        <div className="fw-semibold">{mad.name}</div>
                                        <div className="text-muted" style={{ fontSize: "12px" }}>
                                        {mad.code}
                                        </div>
                                    </div>
                                    </div>
                                </td>

                                <td>{mad.type}</td>

                                <td>
                                    <MdOutlineCurrencyRupee /> {mad.price}
                                </td>

                                <td>{mad.stock} pcs</td>

                                <td>
                                    {new Date(mad.expiry).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                    })}
                                </td>

                                <td>{mad.manufacture}</td>

                                <td>
                                    <div className="d-flex gap-3">
                                    <button
                                        className="btn btn-sm btn-secondary"
                                        onClick={() => handleEditMedicine(mad)}
                                    >
                                        <LuNotepadText />
                                    </button>

                                    <button className="btn btn-sm btn-primary">
                                        <CiMedicalCross />
                                    </button>

                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDeleteMedicine(mad._id)}
                                    >
                                        <RiDeleteBinFill />
                                    </button>
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

            {/* Page Number */}
            <div className="p-4 m-2">
                <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Medicine;

{/* 
                        Row 1
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
                                            </label> */}

                                            {/* Code exactly under label, aligned left */}
                                            {/* <p className="text-muted m-0" style={{ fontSize: "12px" }}>
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
                        </tr> */}

