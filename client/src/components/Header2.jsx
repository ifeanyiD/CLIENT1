const Header2 = ({ toggleSidebar, toggleCollapse, collapsed }) => {
  return (
    <header className="header">
      <div className="header-left">
        {/* Mobile toggle */}
        <button className="menu-btn" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Desktop collapse toggle */}
        <button className="collapse-btn" onClick={toggleCollapse}>
          {collapsed ? "→" : "←"}
        </button>

        <h1>Dashboard</h1>
      </div>

      <div className="header-right">
        <span className="admin-name">Ifeanyi</span>
        <button className="logout-btn">Logout</button>
      </div>
    </header>
  );
};

export default Header2;
