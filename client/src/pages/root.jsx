import React, { useState } from 'react';
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
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdEventSeat } from "react-icons/md";
import A from "../assets/a.jpg"
import B from "../assets/b.jpg"

import "../styles/root.scss";
import Modal from '../utils/modal';

const fontSize = 25;
const icons = [
                <MdEvent color='blue' fontSize={fontSize}/>, 
                <SiManageiq color='blue' fontSize={fontSize}/>,
                <MdBrandingWatermark color='blue' fontSize={fontSize}/>, 
                <IoLogoDesignernews color='blue' fontSize={fontSize}/>, 
                <SiConsul color='blue' fontSize={fontSize}/>, 
                <CiReceipt color='blue' fontSize={fontSize}/> 
              ]
const imgs = [A, B];
  
export default function Root() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [index, setIndex] = useState(0);
  const arr = Array.from({length : 4});
  const nextTestimony = () => {
    setRotation(prev => prev - 90);
    let indexUpdate =  index === 3 ? 0 : index + 1
    setIndex(indexUpdate)
  };

  return (
    <div className='root'>
      <Nero/>
      <section className='nero_services'>
       <div className='container'>
          <div className='s_header'>
              <h2>We’re <u>committed to delivering</u> the best service for your event</h2>
          </div>
          <div className='s_details'>
              {
                ["Event Planning","Event and Wedding Venues", "Event management", "Branding", "Event design", "Project Consultancy", "Event decoration"]
                  .map((event, id)=> <div key={id} className='items'> <span>{icons[id]}</span> <span>{event}</span> </div>)
              }
          </div>
        </div>
      </section>
      <section className="root_divider">
            <div className="container">
                <div>
                  <SiAdguard color='orange' fontSize={20}/>
                  <span className='small-text'>100%</span>
                  <label>Reliable Service, guaranteed</label>
                </div>
                <div>
                  <FaVoteYea color='orange' fontSize={20}/>
                  <span className='small-text'>3+</span>
                  <label>Years of Experience</label>
                </div>
                <div>
                  <MdEventSeat color='orange' fontSize={20}/>
                  <span className='small-text'>10+</span>
                  <label>Event Covered</label>
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

      <section className='testimony'>
          <div className='container'>
            <h2>What our <span>customer say</span></h2>
            <div className='scene'>
              <div className='cube' style={{transform:`rotateY(${rotation}deg)`}}>
                <div class="face front">Testimony 1</div>
                <div class="face right">Testimony 2</div>
                <div class="face back">Testimony 3</div>
                <div class="face left">Testimony 4</div>
              </div>
            </div>
            <div className='t_btn'>
              <button onClick={nextTestimony} >Next</button>
              {
                arr.map((i, idx)=> <span style={index === idx ? {backgroundColor : "blue"} : {backgroundColor : "inherit"}}></span>)
              }
            </div>
          </div>
      </section>

      <section className='r_contact'>
        <div className='container'>
          <h1>Do you have an <span>Event</span> to celebrate?</h1>
          <h4>We are ready to plan your Events</h4>
          <button><FaArrowTrendUp/><span>Contact us</span></button>
        </div>
      </section>
      <section className='faqs'>
        <div className='container'>
          <h2>FAQS</h2>
          <div>
             <details>
                <summary>What is Chizzy event?</summary>
                <p>It's ....</p>
             </details>
             <details>
                <summary>What is Chizzy event?</summary>
                <p>It's ....</p>
             </details>
          </div>
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
