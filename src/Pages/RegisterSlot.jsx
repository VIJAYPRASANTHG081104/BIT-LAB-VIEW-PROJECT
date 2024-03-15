import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegisterSlot = () => {
  
  //  && localStorage.setItem("detail", JSON.stringify(value));

  const details = JSON.parse(localStorage.getItem("detail"));
  console.log(details);
  return (
    <div>
      <div className="topSem">
        {" "}
        <h1>SLOT BOOKING</h1>
      </div>
      <div className="registerBack">
        {details.sheet[0] && details.sheet[0].links.map((value, index) => {
          return (
            <div className="cardMain" key={index} data-aos="flip-left">
              <div className="imgDiv">
                {/* <img className="img1" src={details} alt="img"/> */}
              </div>

              <Link className="link" to={value.link}>
                <button className="btn">{value.subject}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegisterSlot;
