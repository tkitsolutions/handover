import React from 'react'
import irtaza from "../assets/irtaza.svg";
import aizaz from "../assets/aizaz.svg";
import aqib from "../assets/aqib.svg";
const Team = () => {
  return (
    <section className="team">
    <h1>Our <span>Team</span></h1>
    <div className="teamparent">
    <div className="team__card">
      <img src={irtaza} alt="no img found" />
      <h1>IRTAZA MADAD
      </h1>
      <p>
      Embedded System Designer
      </p>
    </div>
    <div className="team__card">
      <img src={aizaz} alt="no img found" />
      <h1>AIZAZ</h1>
      <p>
       PCB Designer
      </p>
    </div>
    <div className="team__card">
      <img src={aqib} alt="no img found" />
      <h1>AAQIB</h1>
      <p>
       MicroController Expert
      </p>
    </div>
    </div>
  </section>
  )
}

export default Team