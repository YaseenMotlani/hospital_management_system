import React from "react";


const MedicineGraph = () => {
    return (
        <div className="activityOverViewParentContainer shadow-lg rounded p-3 bg-white h-100" 
            style={{ width: "30%", height:"320px" }}
        >
            {/* Title and Dropdown */}
            <div class="d-flex justify-content-between align-items-center mb-1">
                <h5>Top Medicines Sold</h5>
                <div class="btn-group">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                Daily
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Weekly
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Monthly
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Yearly
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                All
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className="d-flex justify-content-between align-items-center mb-1">
                    <ul>
                        <li> Paracetamol</li>
                        <li> Vitamin Tablets</li>
                        <li> Antacids Tablets</li>
                        <li> Others</li>
                    </ul>
                </div>
        </div>
    )
}

export default MedicineGraph ;