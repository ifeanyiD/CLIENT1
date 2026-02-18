import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import { IoMdHelp } from "react-icons/io";
import "../styles/mainLayout.scss";
import Footer from '../components/footer';

export default function MainLayout() {
  return (
    <div className='main_layout'>
        <Header/>
        <Outlet/>
        <Footer/>

        <button className='help'>
          <IoMdHelp/>
        </button>
    </div>
  );
}
