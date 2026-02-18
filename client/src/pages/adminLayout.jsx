import Sidebar from "../components/Sidebar";
import Header from "../components/Header2";
import "../styles/admin.scss";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false); // desktop
   const [sidebarOpen, setSidebarOpen] = useState(false); // mobile

  return (
    <div className={`admin ${collapsed ? "collapsed" : ""}`}>
      <Sidebar 
        collapsed = {collapsed} 
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(prev => !prev)}
      />

      <div className="admin__main">
        <Header 
          toggleSidebar = {() => setSidebarOpen(prev => !prev)}
          collapsed={collapsed}
          toggleCollapse={() => setCollapsed(prev => !prev)}
        />
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminLayout;
