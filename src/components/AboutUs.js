import React from "react";
// import aboutimg from '../assets/new/AboutImg.svg'

const AboutUs = () => {
  return (
    <section className="aboutus" id="aboutus">
      <div className="aboutus__img">
        <img src={require('../assets/aboutusnew.png')} alt="no img found"/>
      </div>
      <div className="aboutus__content">
        <h1>
          About<span> Us</span>
        </h1>
        <p>
        Welcome to iWizSolutions, a dynamic startup that's swiftly carving its path in the global tech arena. Our
journey began with a simple vision, and it's been incredible to witness our growth into a standout
player, even from our earliest days. Drawing from the energy of securing international clients right from
the outset, we're driven by a steadfast commitment to excellence. Our team of experts is poised to
propel this venture to unprecedented heights.
        </p>
        <button onClick={()=>document.getElementById('contactus').scrollIntoView({behavior:"smooth"})}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
