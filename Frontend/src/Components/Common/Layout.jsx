import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <div>
      {/* ===== SIDEBAR (Fixed) ===== */}
      <div
        style={{
          width: "250px",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          backgroundColor: "#ffffff",
          overflowY: "auto",
          // borderRight: "1px solid #dee2e6",
          // zIndex: 1000,
        }}
      >
        <SideNav />
      </div>

      {/* ===== RIGHT SIDE ===== */}
      <div style={{ marginLeft: "250px" }}>
        
        {/* ===== HEADER (Fixed) ===== */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: "250px",
            right: 0,
            zIndex: 999,
          }}
        >
          <Header title={title} />
        </div>

        {/* ===== MAIN CONTENT (Scrollable Only) ===== */}
        <div
          style={{
            marginTop: "80px",   // space for header
            padding: "20px",
            height: "calc(100vh - 80px)",
            overflow: "hidden",
            backgroundColor: "#f4f7fb",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;