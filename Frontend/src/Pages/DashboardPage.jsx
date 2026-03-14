import React from "react";
import ActivityOverView from "../Components/dashboard/ActivityOverView";
import DashboardAppointments from "../Components/dashboard/DashboardAppontments";
import DashboardEducationContent from "../Components/dashboard/DashboardEducationContent";
import MedicineGraph from "../Components/dashboard/MedicineGraph";
import DashboardPatientFee from "../Components/dashboard/DashboardPatientFee";
import SideNav from "../Components/Common/SideNav";
import Header from "../Components/Common/Header";



// const DashboardPage = () => {
//   return (
//     <div className="d-flex">

//       {/* LEFT SIDE MENU */}
//       <SideNav />

//       {/* RIGHT SIDE CONTENT */}
//       <div className="flex-grow-1">
//         <Header  title="Dashboard" />

//         <div className="bg-color d-flex justify-content-between p-4">
//           <ActivityOverView />
//           <DashboardAppointments />
//         </div>

//         {/* <div className="bg-color d-flex justify-content-between p-4"> */}
//         <div className="d-flex justify-content-between mt-3" style={{ gap: "15px" }}>
//           <DashboardEducationContent />
//           <MedicineGraph />
//           <DashboardPatientFee />
//         </div>
//       </div>
//     </div>
//   );
// };

const DashboardPage = () => {
  return (
    <div className="d-flex vh-100 overflow-hidden">

      {/* LEFT SIDE MENU */}
      <SideNav />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        
        <Header title="Dashboard" />

        {/* MAIN CONTENT AREA */}
        <div className="flex-grow-1 d-flex flex-column overflow-hidden p-3">

          {/* TOP ROW */}
          <div className="d-flex gap-3" style={{ height: "45%" }}>
            <ActivityOverView />
            <DashboardAppointments />
          </div>

          {/* BOTTOM ROW */}
          <div className="d-flex gap-3 mt-3" style={{ height: "55%" }}>
            <DashboardEducationContent />
            <MedicineGraph />
            <DashboardPatientFee />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
