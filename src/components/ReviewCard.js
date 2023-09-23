import React from "react";
import { styled } from "styled-components";
import {FaStar,FaStarHalfAlt} from 'react-icons/fa'
const ReviewCard = ({title,position,comments,imagepath,flagpath}) => {
  return (
    <ReviewCardStyle>
      <div className="review-comments">
        {comments}
      </div>
      <div className="review-client">
        <div className="client-country">
          <img src={flagpath}/>
        </div>
        <div className="clientRating">
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStar/>
      <FaStarHalfAlt/>
        </div>
        <div className="clientinfo">
          <div className="client-image"><img src={imagepath}/></div>
          <div className="client-data">
          <h4>{title}</h4>
          <h5>{position}</h5>
          </div>
        </div>
      </div>
    </ReviewCardStyle>
  );
};


const ReviewCardStyle=styled.div`

    min-height: 300px;
    box-shadow: 0 0 13px 0 rgba(0,0,0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items:center;
    gap: 32px;
    flex-direction: column;
    padding:36px 36px;
    color: #585757;
    z-index: -1;
    .review-comments{
        font-size: 16px;
        text-align:center;
        padding: 30px 30px;
    }
    .review-client{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 23px;
        /* border: 1px solid red; */

        .client-country{
          width: 100px;
          height: 70px;
          object-fit: cover;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .clientRating{
            display: flex;
            font-size: 24px;
            color: #FDCC0D;
        }
        .clientinfo{
          display: flex;
          flex-direction: column;
          align-items: center;
          .client-image{
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }

          }
          .client-data{
            display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
            h4{
                color: #585757;
                font-size: 16px;
                font-weight: 500;
            }
            h5{
                font-size: 13px;
                font-weight: 400;
            }
          }
           
        }
    }

`

export default ReviewCard;
