import React from "react";
import { NavLink } from "react-router-dom";
import { IoSpeedometer } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdCastForEducation, MdOutlineMessage } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { IoDocumentSharp, IoPeopleSharp } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className="shadow vh-100 p-3" style={{ width: "250px" }}>
      <div className="text-center mb-4">
        <img
          src="/Clicnic.png"
          alt="Clinic Logo"
          style={{ width: "120px",}}
        />
      </div>

      <ul className="mt-3" style={{ listStyle: "none", padding: 0 }}>
        <li className="my-3">
          <NavLink to="/dashboard" className="px-2 py-2 hover-div d-flex align-items-center">
            <IoSpeedometer size={20} className="me-2" />
            Dashboard
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/patients" className="px-2 py-2 hover-div d-flex align-items-center">
            <IoPeopleSharp size={20} className="me-2" />
            Patients
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/appointments" className="px-2 py-2 hover-div d-flex align-items-center">
            <IoDocumentSharp size={20} className="me-2" />
            Appointments
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/doctors" className="px-2 py-2 hover-div d-flex align-items-center">
            <FaUserDoctor size={20} className="me-2" />
            Doctors
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/messages" className="px-2 py-2 hover-div d-flex align-items-center">
            <MdOutlineMessage size={20} className="me-2" />
            Messages
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/education" className="px-2 py-2 hover-div d-flex align-items-center">
            <MdCastForEducation size={20} className="me-2" />
            Education Content
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/inventory" className="px-2 py-2 hover-div d-flex align-items-center">
            <AiOutlineMedicineBox size={20} className="me-2" />
            Medicine Inventory
          </NavLink>
        </li>

        <li className="my-3">
          <NavLink to="/settings" className="px-2 py-2 hover-div d-flex align-items-center">
            <IoMdSettings size={20} className="me-2" />
            Settings
          </NavLink>
        </li>
      </ul>

      <button className="btn btn-danger mt-4 w-100">Logout</button>
    </div>
  );
};

export default SideNav;


// import React from "react";
// import { NavLink } from "react-router-dom";   // <-- FIX HERE
// import React from "react";
// import { IoSpeedometer } from "react-icons/io5";
// import { IoMdSettings } from "react-icons/io";
// import { AiOutlineMedicineBox } from "react-icons/ai";
// import { MdCastForEducation } from "react-icons/md";
// import { MdOutlineMessage } from "react-icons/md";
// import { FaUserDoctor } from "react-icons/fa6";
// import { IoDocumentSharp } from "react-icons/io5";
// import { IoPeopleSharp } from "react-icons/io5";

// const SideNav = () => {
//    return (
//     <div className="shadow vh -100">
//         <div>
//             <img src="" alt="" />
//         </div>

//         <ul className="mt-5" style={{listStyle: "none"}}>
//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <IoSpeedometer size={20} className="me-2"/>
//                         Dashboard
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <IoPeopleSharp size={20} className="me-2"/>
//                         Patients
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <IoDocumentSharp size={20} className="me-2"/>
//                         Appointments
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <FaUserDoctor size={20} className="me-2"/>
//                         Doctors
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <MdOutlineMessage size={20} className="me-2"/>
//                         Messages
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <MdCastForEducation size={20} className="me-2"/>
//                         Education Content
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <AiOutlineMedicineBox size={20} className="me-2"/>
//                         Medicine Inventory
//                     </div>
//                 </NavLink>
//             </li>

//             <li className="my-3">
//                 <NavLink to={"/dashboard"}>
//                     <div className="px-2 py-2 hover-div">
//                         <IoMdSettings size={20} className="me-2"/>
//                         Settings
//                     </div>
//                 </NavLink>
//             </li>
//         </ul>

//         <button className="btn btn-danger mt-5 " style={{ width: "80%" }}>
//             logout
//         </button> 
//     </div>
//    ) 
// }

// export default SideNav;


