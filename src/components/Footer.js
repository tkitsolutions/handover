import React from "react";
import logo from "../assets/logoblue.svg";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footerContent">
          <div className="about">
            <img src={logo} />
            <p>
              Welcome to iWizSolutions, a dynamic startup that's swiftly carving
              its path in the global tech arena. Our journey began with a simple
              vision, and it's been incredible to witness our growth into a
              standout player, even from our earliest days. Drawing from the
              energy of securing international clients right from the outset,
              we're driven by a steadfast commitment to excellence.
            </p>
            <div className="icons">
              <div>
                <a href="https://twitter.com/IWIZSOLUTI8328" target="__blank"><AiOutlineTwitter /></a>
              </div>
              <div>
              <a href="https://web.facebook.com/profile.php?id=61551482918436" target="__blank"><FaFacebookF /></a>
              </div>
              <div>
              <a href="https://www.instagram.com/iwizsol/" target="__blank"><AiFillInstagram /></a>
              </div>
              <div>
              <a href="https://www.linkedin.com/company/iwiz-solutions/" target="__blank"><BsLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="quickmenu">
            <h1>Quick Links</h1>
            <div
              onClick={() =>
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("aboutus")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About Us
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Services
            </div>
            <div
              onClick={() =>
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Projects
            </div>
          </div>
          <div className="contact">
            <div>
              <HiMail className="icon" />
              <p>info@iwizsol.com</p>
            </div>
            <div>
              <MdLocationOn className="icon" />
              <p>Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
