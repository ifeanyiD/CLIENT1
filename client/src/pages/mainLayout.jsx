import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import { IoMdHelp } from "react-icons/io";
import "../styles/mainLayout.scss";

export default function MainLayout() {
  return (
    <div className='main_layout'>
        <Header/>
        <Outlet/>
        <footer>footer</footer>

        <button className='help'>
          <IoMdHelp/>
        </button>
    </div>
  );
}
