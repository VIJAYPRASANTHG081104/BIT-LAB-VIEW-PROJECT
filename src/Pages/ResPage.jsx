import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "reactstrap";

const ResPage = () => {
  const details = useSelector((state) => state.student);
  console.log(details);

  return (
    <div className="resPage">
    <div className='topSem'><h1>{details.name}</h1></div>
      <div className="sheetDiv" >
        {details &&
          details.sheet.map((e, index) => {
            return (
              <div className="cardMain1" data-aos="flip-up" key={index}>
                <div className="imgDiv">
                  <img className="img1" src={e.img}/>
                </div>
                <Link to={'/register/course'}><button className="btn">{e.card}</button></Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ResPage;
