import { useEffect, useState } from "react";

import "./App.css";
import Router from "./route/Router";
import SideBar from "./Components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./Components/loader/loader";
AOS.init();

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);

  return (
    <>
      <BrowserRouter>
      {(loader==false)&&<Loader/>}
        {loader && (
          <div className="MainDiv">
            <div className="side" data-aos="fade-up">
              <SideBar />
            </div>
            <div className="route">
              <Router />
            </div>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
