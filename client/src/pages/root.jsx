import React, {useState } from 'react';
import Nero from '../components/nero';
import { MdEvent } from "react-icons/md";
import { MdBrandingWatermark } from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io5";
import { SiManageiq } from "react-icons/si";
import { SiConsul } from "react-icons/si";
import { CiReceipt } from "react-icons/ci";
import { FaVoteYea } from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import { IoLinkSharp } from "react-icons/io5";
import { GrFormView } from "react-icons/gr";
import A from "../assets/a.jpg"
import B from "../assets/b.jpg"

import "../styles/root.scss";
import Modal from '../utils/modal';

const fontSize = 25;
const icons = [
                <MdEvent color='purple' fontSize={fontSize}/>, 
                <SiManageiq color='blue' fontSize={fontSize}/>,
                <MdBrandingWatermark color='purple' fontSize={fontSize}/>, 
                <IoLogoDesignernews color='blue' fontSize={fontSize}/>, 
                <SiConsul color='blue' fontSize={fontSize}/>, 
                <CiReceipt color='purple' fontSize={fontSize}/> 
              ]
const imgs = [A, B];

export default function Root() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='root'>
      <Nero/>
      <section className='nero_services'>
       <div className='container'>
          <div className='s_header'>
              <i>About us</i>
              <h2>We’re committed to delivering the best service for your event</h2>
              <p>
                At Eventigo, we offer personalized event planning services to fit your requirements. Your event is unique, and we’re with you every step of the way—from planning to execution.”
              </p>
          </div>
          <div className='s_details'>
              {
                ["Event Planning", "Event management", "Branding", "Event design", "Project Consultancy", "Event decoration"]
                  .map((event, id)=> <div key={id} className='items'> <span>{icons[id]}</span> <span>{event}</span> </div>)
              }
          </div>
        </div>
      </section>
      <section className="root_divider">
            <div className="container">
                <div>
                  <SiAdguard color='orange' fontSize={20}/>
                  <span>100%</span>
                  <label>Reliable Service, guaranteed</label>
                </div>
                <div>
                  <FaVoteYea color='orange' fontSize={20}/>
                  <span>3+</span>
                  <label>Years of Experience</label>
                </div>
            </div>
      </section>
      <section className='root_portfolio'>
        <div className='container'>
          <div>
            <h3>Amazing Work</h3>
            <p>Pictures Speak about our Covered Events</p>
          </div>
          <div className='r_portfolio'>
            {
              imgs.map((i, idx)=>
                <div key={idx} className= 'imgs'>
                  <img src={i}/>
                  <div className='img_opt'>
                    <label>Image title</label>
                    <div>
                      <span onClick={()=>setSelectedImg(i)}><GrFormView/></span>
                      <span><IoLinkSharp/></span>
                    </div>
                  </div>
                </div>
            )}
            
          </div>
          <button className='v_more'>View More</button>
        </div>
      </section>


      {selectedImg &&
        <Modal setSelectedImg={setSelectedImg}>
          <img src={selectedImg} alt="Preview" />
        </Modal>
      }
    </div>
  );
}
