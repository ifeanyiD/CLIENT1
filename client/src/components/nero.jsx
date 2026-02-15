import React, { useEffect, useState } from 'react';

import "../styles/nero.scss";

const images = [ "/assets/birthday.jpg", "/assets/conference.jpg", "/assets/wedding.jpg", "/assets/event.jpg"];
const types = [ "Social", "Birthday", "Anniversary", "Wedding"]

export default function Nero() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(0);

  // Preload images
  useEffect(() => {
     let loadedCount = 0;
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true); // all images loaded
          }
        };
      });
  }, []);

  useEffect(() => {
    if(!loaded) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval)
  }, [loaded]);

  useEffect(()=>{
    const interval = setInterval(() => {
      setCounter((prev)=> (prev + 1) % types.length)
    }, 3000);
    return () => clearInterval(interval) 
  }, []);

    if (!loaded) {
    return (
      <section className="hero">
        <div className="overlay" />
        <div className="content">
          <h1>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <section className='hero'>
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

        <div className='overlay'></div>

        <div className='container'>
          <h1>Let’s make your <span>{types[counter]}</span> Party unforgettable—together</h1>
          <h3>based in Central Ketucky</h3>
          <button>Book A DISCOVERY CALL</button>
        </div>
    </section>
  );
}
