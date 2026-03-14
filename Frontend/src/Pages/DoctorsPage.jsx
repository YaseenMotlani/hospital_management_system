import React from "react";
import Layout from "../Components/Common/Layout";
import Doctor from "../Components/doctor/Doctor";

const DoctorPage = () => {
    return(
        <Layout title="Doctors">
            <Doctor/>
        </Layout>
    );
};

export default DoctorPage;