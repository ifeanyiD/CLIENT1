import React from 'react';
import {NavLink} from "react-router-dom";
import { FaFacebookF, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import "../styles/footer.scss";

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='footerH'>
                    <h4>ChizzyEvent</h4>
                    <div className='f_media'>
                        <NavLink><FaFacebookF color='blue'/></NavLink>
                        <NavLink><FaInstagramSquare color='purple'/></NavLink>
                        <NavLink><FaYoutube color='red'/></NavLink>
                    </div>
                </div>
                <div className='footer'>
                        <h3>LINKS</h3>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Our Services</NavLink>
                        <NavLink>Events & Gallery</NavLink>
                        <NavLink>Contact us</NavLink>
                </div>
            </div>
            <div className='copyRight'>Copyright &copy; chizzyEvent | All rights reserved</div>
        </footer>
    );
}

export default Footer;