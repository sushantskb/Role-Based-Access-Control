import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
