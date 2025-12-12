import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";

const Layout = ({ title, children }) => {
  return (
    <div className="d-flex">
      {/* LEFT SIDE NAV */}
      <SideNav />

      {/* RIGHT SIDE CONTENT */}
      <div className="flex-grow-1">
        <Header title={title} />

        <div className="p-4 bg-color" style={{ minHeight: "100vh" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

