import React, { useEffect, useState } from "react";
import { IoDocumentTextSharp, IoDocument, IoPeople } from "react-icons/io5";
import { RiMedicineBottleFill } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import '../Style/ActivityOverView.css'

const ActivityOverView = () => {

    const [stats, setStats] = useState({
        appointments: 0,
        patients: 0,
        medicines: 0,
        education: 0
    });

    useEffect(() => {
        fetchStats();
    }, []);

   const fetchStats = async () => {
        try {

            const doctorRes = await fetch("http://localhost:8080/api/doctor");
            const doctorData = await doctorRes.json();

            const patientRes = await fetch("http://localhost:8080/api/patient");
            const patientData = await patientRes.json();

            const medicineRes = await fetch("http://localhost:8080/api/medicine");
            const medicineData = await medicineRes.json();

            setStats({
                doctors: doctorData?.data?.length || 0,
                patients: patientData?.data?.length || 0,
                medicines: medicineData?.data?.length || 0,
                education: 0
            });

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="activityOverViewParentContainer shadow-lg rounded p-3 bg-white h-100 d-flex flex-column" 
            style={{ width: "30%" }}
        >

            <div className="d-flex justify-content-between align-items-center mb-1">
                <h5>Activity Overview</h5>
                <IoDocumentTextSharp/>
            </div>

            <div className="d-flex justify-content-between mb-2">

                <div className="activityOverContainer1 rounded w-50 p-3 text-center">
                    <IoDocument size={25}/>
                    <div className="fw-bold">{stats.doctors}</div>
                    <div>doctor</div>
                </div>

                <div className="activityOverContainer2 rounded w-50 p-3 text-center">
                    <IoPeople size={25}/>
                    <div className="fw-bold">{stats.patients}</div>
                    <div>Patients</div>
                </div>
            </div>

            <div className="d-flex justify-content-between">

                <div className="activityOverContainer3 rounded w-50 p-3 text-center">
                    <RiMedicineBottleFill size={25}/>
                    <div className="fw-bold">{stats.medicines}</div>
                    <div>Medicine Sold</div>
                </div>

                <div className="activityOverContainer4 rounded w-50 p-3 text-center">
                    <VscBook size={25}/>
                    <div className="fw-bold">{stats.education}</div>
                    <div>Education Content</div>
                </div>
            </div>

        </div>
    )
}

export default ActivityOverView;
