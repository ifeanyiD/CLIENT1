import { RiMenuFoldLine } from "react-icons/ri";
import {NavLink} from "react-router-dom"

const isActive = ({isActive, isPending}) =>{
  return isPending ? "" : isActive ? "active" : ""
}

const Sidebar = ({ collapsed, sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${sidebarOpen ? "open" : ""}`}>
      <h2 className="sidebar__logo">{collapsed ? "A" : "Admin Panel"}</h2>

      <nav className="sidebar__nav">
        <NavLink to="/admin" className={isActive}>Overview</NavLink>
        <NavLink to="/admin/messages" className={isActive}>Messages</NavLink>
        <NavLink to="/admin/media" className={isActive}>Media</NavLink> 
        <NavLink to={"/admin/members"} className={isActive}>Members</NavLink>
        <NavLink to="/admin/settings" className={isActive}>Settings</NavLink>
      </nav>

      <span className="foldMenu" onClick={toggleSidebar}>
        <RiMenuFoldLine/>
      </span>
    </aside>
  );
};

export default Sidebar;
