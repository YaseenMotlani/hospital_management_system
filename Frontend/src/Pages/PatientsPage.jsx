import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import Layout from "../Components/Common/Layout";
import Patient from "../Components/patients/Patients.jsx";

const PatientsPage = () => {
    return(
        <Layout title="Patient Details">
            <Patient/>
        </Layout>
    );
};

export default PatientsPage;