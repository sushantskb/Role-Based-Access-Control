import React from "react";
import Sidebar from "./components/common/Sidebar";
import { Outlet } from "react-router-dom"; // This is where the nested routes render.

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden"> {/* Make sure content doesn't overflow */}
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-grow p-4 overflow-auto"> {/* Allow scrolling inside main content */}
        <Outlet /> {/* This will render the content for nested routes */}
      </div>
    </div>
  );
};

export default Layout;
