import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/bitlogo.jpg";

const SideBar = () => {
  const [state, setState] = useState("odd");

  return (
    <>
      <div>
        <img src={Logo} className="Logo" />
      </div>

      <div>
        <Link
          to="odd"
          onClick={() => {
            setState("odd");
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
            }}
          >
            EVEN SEMESTER
          </button>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
