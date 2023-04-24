import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../layouts/frontend/Navbar";
import "../../assets/frontend/css/styles.css";

import Dashboard from "./DashboardUser";

import Publicroutes from "../../routes/Publicroutes";

import "bootstrap/dist/css/bootstrap.min.css";


const FrontendLayout = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />

          {Publicroutes.map((routedata, id) => {
            return (
             
                <Route
                  key={id}
                  path={routedata.path}
                  element={routedata.element}
                />
              
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default FrontendLayout;
