import React from "react";
import expertiseimg from "../assets/new/expertise.svg";
import customsolimg from "../assets/new/customsol.svg";
import Qualityimg from "../assets/new/Quality.svg";
const WhyChoose = () => {
  return (
    <section className="whyus">
      <h1>Why <span>Choose Us</span></h1>
      <div className="whyusparent">
      <div className="whyus__card">
        <img src={expertiseimg} alt="no img found" />
        <h1>Expertise</h1>
        <p>
          With years of experience in the field, our team brings a wealth of
          expertise to every project. We stay updated with the latest
          technological advancements to deliver solutions that meet the highest
          standards.
        </p>
      </div>
      <div className="whyus__card">
        <img src={customsolimg} alt="no img found" />
        <h1>Custom Solutions</h1>
        <p>
          We understand that each project is unique. That's why we work closely
          with our clients to develop tailored solutions that address their
          specific needs and goals.
        </p>
      </div>
      <div className="whyus__card">
        <img src={Qualityimg} alt="no img found" />
        <h1>Quality Focus</h1>
        <p>
          We pride ourselves on our client-centric approach. Your success is our
          success, and we're committed to building lasting relationships by
          delivering outstanding results and exceptional customer service.
        </p>
      </div>
      </div>
    </section>
  );
};

export default WhyChoose;
