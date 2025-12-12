import React from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoDocument } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import '../Style/ActivityOverView.css'


const ActivityOverView = () => {
    return (
        <div className="activityOverViewParentContainer shadow-lg rounded p-3 bg-white h-100" 
            style={{ width: "30%" }}
        >
            {/* Title and Dropdown */}
            <div class="d-flex justify-content-between align-items-center mb-1">
                <h5>Activity Overview</h5>
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
                <IoDocumentTextSharp/>
            </div>

            {/* Activity Container=0iu */}
            {/* 1st & 2nd Container */}
            <div class="d-flex justify-content-between align-items-center mb-1">
                {/* First Container */}
                <div className="activityOverContainer1 d-flex justify-content-between align-items-center  rounded
                h-25 w-50 p-3">
                    <div>
                        <div className="text-center">
                            <IoDocument size={25}/>
                        </div>
                        <div className="text-center fw-bold">{25}</div>
                        <div className="text-center">Appointment</div>
                    </div>
                </div>
                {/* Second Container */}
                <div className="activityOverContainer2 d-flex justify-content-between align-items-center  rounded 
                h-25 w-50 p-3">
                    <div>
                        <div className="text-center">
                        <IoPeople size={25} />
                        </div>
                        <div className="text-center fw-bold">{25}</div>
                        <div className="text-center">Patients</div>
                    </div>
                </div>
            </div>

            {/* 3rd & 4th Container*/}
            <div class="d-flex justify-content-between align-items-center mb-1">
                {/* Third Container */}
                <div className="activityOverContainer3 d-flex justify-content-between align-items-center  rounded 
                h-25 w-50 p-3">
                    <div>
                        <div className="text-center">
                        <RiMedicineBottleFill size={25}/>
                        </div>
                        <div className="text-center fw-bold">{25}</div>
                        <div className="text-center">Medicine Sold</div>
                    </div>
                </div>

                {/* Fourth Container */}
                <div className="activityOverContainer4 d-flex justify-content-between align-items-center  rounded 
                h-25 w-50 p-3">
                    <div>
                        <div className="text-center">
                        <VscBook size={25} />
                        </div>
                        <div className="text-center fw-bold">{25}</div>
                        <div className="text-center">Education Content</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActivityOverView ;