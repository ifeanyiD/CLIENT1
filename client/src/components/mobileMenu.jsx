import { useState } from "react";
import "../styles/mobileMenu.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const active = ({isPending, isActive}) => {
    return isPending ? "" : isActive ? "active" : ""
}

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobileMenu">

      {/* HAMBURGER ICON */}
      <div className="mobileMenu__icon" onClick={() => setOpen(true)}>
        <FaBars />
      </div>

      {/* OVERLAY */}
      <div className={`mobileMenu__overlay ${open ? "show" : ""}`}>

        <div className="mobileMenu__header">
          <h2>EventMaster</h2>
          <FaTimes onClick={() => setOpen(false)} />
        </div>

        <ul className="mobileMenu__links">
          <li onClick={() => setOpen(false)}>
            <NavLink className={active} to={"/"}>Home</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={active} to={"/aboutUs"}>About</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={active} to={"/gallery"}>Events</NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={active} to={"contact"}>Contact</NavLink>
          </li>
        </ul>

        <button className="mobileMenu__cta">Book Event</button>

      </div>

    </div>
  );
};

export default MobileMenu;