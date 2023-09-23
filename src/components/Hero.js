import React from "react";
import heroImg from "../assets/hero image.svg"
import iotImg from "../assets/iot.svg"
import webImg from "../assets/web.svg"
import ucImg from "../assets/uc.svg"
import arrow from "../assets/Arrow.svg"

const Hero = () => {
  return (
    <section className="heroSection">
      <h1>Molding <span>Bytes</span> and <span>Bits</span>, Sculpting Digital Realities</h1>
      <p>
        Empowering Innovation: Your trusted partner for high-quality PCB
        manufacturing, expert microcontroller programming, and cutting-edge IoT
        gadget development.
      </p>
      <button onClick={()=>{document.getElementById('contactus').scrollIntoView({behavior:"smooth"})}}>Contact Us<img src={arrow}/></button>
    </section>
  );
};

export default Hero;
