import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import "../../assets/admin/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Navbar";

import routes from "../../routes/routes";

const MasterLayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          {routes.map((route, id) => {
            return (
             
                <Route
                  key={id}
                  path={route.path}
                  element={route.element}
                />
              
            );
          })}
          <Link  to="/admin/dashboard" />
        </Routes>
      </main>
    </div>
  );
};

export default MasterLayout;
