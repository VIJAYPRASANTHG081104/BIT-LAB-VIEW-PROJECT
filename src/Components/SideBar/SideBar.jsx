import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/bitlogo.jpg";

const SideBar = () => {
  const [state, setState] = useState("odd");

  useEffect(() => {
    const storedState = localStorage.getItem("state");

    if (storedState) {
      setState(storedState);
    }
  }, []); 

  return (
    <>
      <div>
        <img src={Logo} className="Logo" alt="Logo" />
      </div>
      <p className="title">ACADEMIC LAB</p>
      <div>
        <Link
          to="odd"
          onClick={() => {
            setState("odd");
            localStorage.setItem("state", "odd");
          }}
        >
          <button className={state === "odd" ? "sideButtonHigh" : "sideButton"}>
            ODD SEMESTER
          </button>
        </Link>

        <Link to="/even">
          <button
            className={state === "even" ? "sideButtonHigh" : "sideButton"}
            onClick={() => {
              setState("even");
              localStorage.setItem("state", "even");
            }}
          >
            EVEN SEMESTER
          </button>
        </Link>
        {/* <Link to="/test"> */}
          <button
            className={state === "test" ? "sideButtonHigh" : "sideButton"}
            onClick={() => {
              setState("test");
              localStorage.setItem("state", "test");
            }}
          >
            PROCTORED TEST
          </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default SideBar;
