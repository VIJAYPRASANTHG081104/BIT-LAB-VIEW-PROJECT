import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="cardMain1" data-aos="flip-left">
      <div className="imgDiv">
        <img className="img1" src={data.img} alt="img"/>
      </div>
      
      <Link className="link" to={`${data.id}`}><button className="btn">{data.year}</button></Link>
      
    </div>
  );
};

export default Card;
