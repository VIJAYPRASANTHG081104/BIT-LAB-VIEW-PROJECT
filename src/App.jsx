import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Router from "./route/Router";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}

        <div className="MainDiv">
          <div className="side" data-aos="fade-up" >
            <SideBar />
          </div>
          <div className="route">
            <Router />
          </div>
        </div>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
