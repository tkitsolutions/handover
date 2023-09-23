import React from "react";

const NewTeam = () => {
  return (
    <section className="team2Container">
        <div className="team2">
        <div className="team2__content">
        <h1>
          Our <span>Team</span>
        </h1>
        <p>
          iWizSolutions has successfully completed over 20 projects in recent
          years, catering to a wide range of applications and customer groups.
          Our company is made up of a vibrant group of designers, engineers, and
          production specialists. Their shared excitement propels the
          investigation of cutting-edge technologies, novel materials, and
          improved industrial processes
        </p>
        </div>
        <div className="team2__image">
          <img src={require('../assets/team.png')}/>
        </div>
        </div>
    </section>
  );
};

export default NewTeam;
