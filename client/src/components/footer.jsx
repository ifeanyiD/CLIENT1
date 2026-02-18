import React from 'react';
import {NavLink} from "react-router-dom"
import "../styles/footer.scss";

function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='footer'>
                    <div className='about'>
                        <h2>ABOUT US</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, laudantium ratione! Amet nobis corporis voluptatum alias excepturi sit consectetur rerum eum obcaecati, dignissimos eaque, ipsam veritatis et nulla cum nihil?</p>
                    </div>
                    <div className='links'>
                        <h2>LINKS</h2>
                        <NavLink>Home</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Our Services</NavLink>
                        <NavLink>Events & Gallery</NavLink>
                        <NavLink>Contact us</NavLink>
                    </div>
                </div>
            </div>
            <div className='copyRight'>Copyright &copy; chizzyEvent | All rights reserved</div>
        </footer>
    );
}

export default Footer;