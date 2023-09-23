import React, { useState } from "react";
import contactusimg from "../assets/contactus.svg";
import emailjs from "emailjs-com";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdOutlineErrorOutline } from "react-icons/md";

const ContactUs = () => {
  const [err, setErr] = useState(false);
  const [success, setsuccess] = useState(false);
  const [isSending, setisSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisSending(true);
    emailjs
      .sendForm(
        "iwizsolmail",
        "template_1nxtdvm",
        e.target,
        "55cZmDZLsoG11e0mZ"
      )
      .then(
        (result) => {
          setsuccess(true);
          setErr(false);
          e.target.reset();
          setisSending(false);
        },
        (error) => {
          setsuccess(false);
          setErr(true);
          setisSending(false);
        }
      );
   
  };

  return (
    <>
      <div className="emptydiv" id="contactus"></div>
      <div className="contactusContainer">
        <div className="contactusparent">
          <div className="contactus">
            <h1>
              Contact <span> Us</span>
            </h1>
            <p>Please provide all the information about the project below</p>
            <form
              onSubmit={handleSubmit}
              onChange={() => {
                setsuccess(false);
                setErr(false);
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
              ></input>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
              ></input>
              <textarea
                type="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button>{isSending?<><div class="loader"></div>Sending...</>:'Submit Request'}</button>
            </form>
            {success ? (
              <div className="Success">
                <BsFillCheckCircleFill /> <p>Successfully Submitted</p>
              </div>
            ) : (
              err && (
                <div className="Error">
                  {" "}
                  <MdOutlineErrorOutline /> <p>Something Went Wrong !</p>
                </div>
              )
            )}
          </div>
          <div  className="contactus_img">
            <img src={contactusimg} alt="no image found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
