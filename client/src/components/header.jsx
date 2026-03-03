import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import  {useAuth} from "../hooks/useAuth"
import "../styles/header.scss";

const active = ({isPending, isActive}) => {
    return isPending ? "" : isActive ? "active" : ""
}

export default function Header() {
  const [menu, setMenu] = useState(false);

  const {user} = useAuth();


  return (
    <header>
        <div className='container'>
            <NavLink className={active} to={"/"}>Logo</NavLink>
            <ul className={`menu ${menu ? "show" : "hide"}`}>
                <li><NavLink  className={active} to="about">About us</NavLink></li>
                <li><NavLink  className={active} to="portfolio">Portfolio</NavLink></li>
                <li><NavLink  className={active} to="services">Our Services</NavLink></li>
                <li><NavLink  className={active} to="booking">Contact us</NavLink></li>
                {
                  user?
                        user.role === "admin"
                          ? 
                        <li><NavLink  className={active} to="admin">Admin</NavLink></li>
                          :
                        ""
                      :
                    <NavLink to={"/auth"}>Sign in/Sign up</NavLink>
                }
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
