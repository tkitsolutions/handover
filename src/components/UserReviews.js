import React, { useState } from 'react'
import ReviewCard from '../components/ReviewCard';
import { styled } from 'styled-components';
import reviews from '../data';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const UserReviews = () => {

  const [p, setp] = useState(1);
  return (
    <section className="projects" id="projects">
    <h1>
      Our <span>Clients</span>
    </h1>
    <div className="projectsparent">
      <div
        className="reviewslidebtn bwd"
        onClick={() => (p > 1 ? setp(p - 1) : setp(4))}
      >
        <MdOutlineArrowBackIosNew />
      </div>
      {p === 1 ? (
        <ReviewCard title={reviews[0].name}  position={reviews[0].job} imagepath={require('../assets/raza.jpeg')} flagpath={require('../assets/german.png')} comments={reviews[0].text}/>
      ) : p === 2 ? (
        <ReviewCard title={reviews[1].name}  position={reviews[1].job} imagepath={require('../assets/Fritz.jpeg')} flagpath={require('../assets/usa.png')} comments={reviews[1].text}/>
      ) : p === 3 ?(
        <ReviewCard title={reviews[2].name}  position={reviews[2].job} imagepath={require('../assets/Ben David.jpeg')} flagpath={require('../assets/usa.png')} comments={reviews[2].text}/>
      ):(
        <ReviewCard title={reviews[3].name}  position={reviews[3].job} imagepath={require('../assets/Abdul.jpeg')} flagpath={require('../assets/pak.png')} comments={reviews[3].text}/>
      )      
      }
      <div
        className="reviewslidebtn fwd"
        onClick={() => (p < 4 ? setp(p + 1) : setp(1))}
      >
        <MdOutlineArrowForwardIos />
      </div>
    </div>
    <div className="sliderdots">
      <div className={p === 1 ? "dot active" : "dot"}></div>
      <div className={p === 2 ? "dot active" : "dot"}></div>
      <div className={p === 3 ? "dot active" : "dot"}></div>
      <div className={p === 4 ? "dot active" : "dot"}></div>
    </div>
    <div className="slidermobilebtn">
    <div
        className="sliderbtn fwd"
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
}

export default UserReviews