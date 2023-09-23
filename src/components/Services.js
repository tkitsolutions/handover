import React from "react";
import embeddedimg from "../assets/new/embedded.svg";
import iotimg from "../assets/new/iot.svg";
import webimg from "../assets/new/web.svg";
const Services = () => {
  return (
    <section className="services" id="services">
      <h1>Our <span>Services</span></h1>
      <div className="servicesparent">
      <div className="services__card">
        <img src={embeddedimg} alt="no img found" />
        <h1>Embedded Systems Expertise</h1>
        <p>
          Our dedicated team of engineers specializes in designing and
          developing embedded systems that power various industries. From IoT
          devices that collect and transmit data to industrial automation
          solutions, we deliver customized solutions that harness the potential
          of embedded technology.
        </p>
      </div>
      <div className="services__card">
        <img src={iotimg} alt="no img found" />
        <h1>IoT Innovations</h1>
        <p>
          As pioneers in the IoT landscape, we design intelligent systems that
          seamlessly connect devices, gather data, and enable informed
          decision-making. Our IoT solutions bring the power of
          interconnectedness to your fingertips.
        </p>
      </div>
      <div className="services__card">
        <img src={webimg} alt="no img found" />
        <h1>Web Services Excellence</h1>
        <p>
          Our web services division is committed to creating impactful digital
          experiences. We offer a range of services, including web design,
          development, e-commerce solutions, and more. Our websites are not just
          visually appealing but also optimized for performance and user
          engagement.
        </p>
      </div>
      </div>
    </section>
  );
};

export default Services;
