import React, { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import projectimg from "../assets/new/projectsimg.svg";
import aizaz from "../assets/aizaz.svg";
import aqib from "../assets/aqib.svg";
const Projects = () => {
  const [p, setp] = useState(1);
  return (
    <section className="projects" id="projects">
      <h1>
        Our <span>Latest Projects</span>
      </h1>
      <div className="projectsparent">
        <div
          className="sliderbtn"
          onClick={() => (p > 1 ? setp(p - 1) : setp(3))}
        >
          <MdOutlineArrowBackIosNew />
        </div>
        {p === 1 ? (
          <div className="slidercard">
            <img src={require("../assets/assetmgmt.png")} alt="no img found" />
            <div className="content">
              <h1>Asset Managment System</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters,
              </p>
            </div>
          </div>
        ) : p === 2 ? (
          <div className="slidercard">
            <img src={require("../assets/smarthome.png")} alt="no img found" />
            <div className="content">
              <h1>Smart Garage Automation</h1>
              <p>
                Experience garage entry at your fingertips. Our
                Bluetooth-powered solution grants you complete control via
                smartphone. Open, close, and secure your garage with ease,
                enhancing convenience and security.
              </p>
            </div>
          </div>
        ) : (
          <div className="slidercard">
            <img src={require("../assets/parking.png")} alt="no img found" />
            <div className="content">
              <h1>Auto Parking Controller</h1>
              <p>
                Revolutionizing parking with LoRaWAN tech, our system employs
                mobile app control to effortlessly manage parking spaces. A tap
                on the app triggers our device, activating barriers for seamless
                entry and exit.
              </p>
            </div>
          </div>
        )}
        <div
          className="sliderbtn"
          onClick={() => (p < 3 ? setp(p + 1) : setp(1))}
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
      <div className="sliderdots">
        <div className={p === 1 ? "dot active" : "dot"}></div>
        <div className={p === 2 ? "dot active" : "dot"}></div>
        <div className={p === 3 ? "dot active" : "dot"}></div>
      </div>
      <div className="slidermobilebtn">
      <div
          className="sliderbtn bwd"
          onClick={() => (p > 1 ? setp(p - 1) : setp(3))}
        >
          <MdOutlineArrowBackIosNew />
        </div>

        <div
          className="sliderbtn fwd"
          onClick={() => (p < 3 ? setp(p + 1) : setp(1))}
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </section>
  );
};

export default Projects;
