import { RiMenuFoldLine } from "react-icons/ri";

const Sidebar = ({ collapsed, sidebarOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${sidebarOpen ? "open" : ""}`}>
      <h2 className="sidebar__logo">{collapsed ? "A" : "Admin Panel"}</h2>

      <nav className="sidebar__nav">
        <a href="/admin">Overview</a>
        <a href="/admin/messages">Messages</a>
        <a href="/admin/media">Media</a>
        <a href="/admin/settings">Settings</a>
      </nav>

      <span className="foldMenu" onClick={toggleSidebar}>
        <RiMenuFoldLine/>
      </span>
    </aside>
  );
};

export default Sidebar;
