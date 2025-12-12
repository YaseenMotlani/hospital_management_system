import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Header = ({ title }) => {
  return (
    <div
      className="d-flex justify-content-between align-items-center px-4 py-3"
      style={{
        background: "#EAF3FF", // Light blue like screenshot
        width: "100%",
        borderBottom: "1px solid #dce6f5",
      }}
    >
      {/* LEFT SIDE - PAGE TITLE */}
      <h3 style={{ fontWeight: "600", margin: 0 }}>{title}</h3>

      {/* RIGHT SIDE PROFILE + NOTIFICATION */}
      <div className="d-flex align-items-center">
        <IoNotificationsOutline size={25} className="me-4" />

        <div className="d-flex align-items-center">
          <img
            src="Profile.jpg"
            alt="Admin"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />

          <div>
            <div style={{ fontWeight: "600" }}>Jonitha Cathrine</div>
            <small style={{ color: "#6c757d" }}>Admin</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



// import React from "react";
// import { IoNotificationsOutline } from "react-icons/io5";

// const Header = () => {
//   return (
//     <div className="d-flex justify-content-end align-items-center p-3 shadow-sm bg-white">
//       <IoNotificationsOutline size={25} className="me-3" />

//       <div className="d-flex align-items-center">
//         <img
//           src="/user.jpg"
//           alt="Admin"
//           style={{
//             width: "40px",
//             height: "40px",
//             borderRadius: "50%",
//             marginRight: "10px",
//           }}
//         />
//         <div>
//           <div style={{ fontWeight: "bold" }}>Jonitha Cathrine</div>
//           <small className="text-muted">Admin</small>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

