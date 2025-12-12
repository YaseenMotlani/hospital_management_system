import React from "react";
import Layout from "../Components/Common/Layout";
import Medicine from "../Components/medicine/Medicine";

const MedicineInventoryPage = () => {
    return(
        <Layout title="Inventory">
            <Medicine/>
        </Layout>
    );
};

export default MedicineInventoryPage;