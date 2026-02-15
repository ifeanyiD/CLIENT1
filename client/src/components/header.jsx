import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import "../styles/header.scss";

const active = ({isPending, isActive}) => {
    return isPending ? "" : isActive ? "active" : ""
}

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header>
        <div className='container'>
            <NavLink className={active}>Logo</NavLink>
            <ul className={`menu ${menu ? "show" : "hide"}`}>
                <li><NavLink  className={active} to="/">About</NavLink></li>
                <li><NavLink  className={active} to="portfolio">Portfolio</NavLink></li>
                <li><NavLink  className={active} to="services">Services</NavLink></li>
                <li><NavLink  className={active} to="booking">Booking</NavLink></li>
                <li><NavLink  className={active} to="admin">Admin</NavLink></li>
            </ul>
            {
              !menu ? 
                <span className='mobile_menu' onClick={()=>setMenu(true)}><CiMenuBurger/></span>
                :
                <span className="mobile_menu" onClick={()=>setMenu(false)}><MdCancel/></span>
            }
        </div>
    </header>
  );
}
