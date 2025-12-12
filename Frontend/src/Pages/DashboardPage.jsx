import React from "react";
import ActivityOverView from "../Components/dashboard/ActivityOverView";
import DashboardAppointments from "../Components/dashboard/DashboardAppontments";
import DashboardEducationContent from "../Components/dashboard/DashboardEducationContent";
import MedicineGraph from "../Components/dashboard/MedicineGraph";
import DashboardPatientFee from "../Components/dashboard/DashboardPatientFee";
import SideNav from "../Components/Common/SideNav";
import Header from "../Components/Common/Header";



const DashboardPage = () => {
  return (
    <div className="d-flex">

      {/* LEFT SIDE MENU */}
      <SideNav />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-grow-1">
        <Header  title="Dashboard" />

        <div className="bg-color d-flex justify-content-between p-4">
          <ActivityOverView />
          <DashboardAppointments />
        </div>

        <div className="bg-color d-flex justify-content-between p-4">
          <DashboardEducationContent />
          <MedicineGraph />
          <DashboardPatientFee />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
