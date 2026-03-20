import { RiMenuFoldLine } from "react-icons/ri";
import {NavLink} from "react-router-dom"

const active = ({isActive, isPending}) =>{
  return isPending ? "" : isActive ? "active" : ""
}

const Sidebar = ({ collapsed, sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${sidebarOpen ? "open" : ""}`}>
      <h2 className="sidebar__logo">{collapsed ? "A" : "Admin Panel"}</h2>

      <nav className="sidebar__nav">
        <NavLink to="/admin" className={active} end>Overview</NavLink>
        <NavLink to="/admin/messages" className={active}>Messages</NavLink>
        <NavLink to="/admin/upload" className={active}>Upload</NavLink> 
        <NavLink to="/admin/media" className={active}>Media</NavLink> 
        <NavLink to={"/admin/members"} className={active}>Members</NavLink>
        <NavLink to="/admin/settings" className={active}>Settings</NavLink>
      </nav>

      <span className="foldMenu" onClick={toggleSidebar}>
        <RiMenuFoldLine/>
      </span>
    </aside>
  );
};

export default Sidebar;
