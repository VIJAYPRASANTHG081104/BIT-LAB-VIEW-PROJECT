import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Even from "../Pages/Even";
import Odd from "../Pages/Odd";
import EvenDept from "../Components/Cards/EvenDept";
import OddDept from "../Components/Cards/OddDept";
import { Provider } from "react-redux";
import { Store } from "../Redux/Store";
import ResPage from "../Pages/ResPage";
import RegisterSlot from "../Pages/RegisterSlot";


const Router = () => {
  return (
    <>
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<Navigate to="/odd" />} />
          <Route path="/even" element={<Even />} />
          <Route path="/odd" element={<Odd />} />
          <Route path="/odd/:id" element={<OddDept />} />
          <Route path="/even/:id" element={<EvenDept />} />
          <Route path="/sheet/res" element={<ResPage />} />
          <Route path="/register/course" element={<RegisterSlot/>}/>
        </Routes>
      </Provider>
    </>
  );
};

export default Router;
