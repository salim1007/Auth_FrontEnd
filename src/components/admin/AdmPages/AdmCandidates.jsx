import React from "react";
import Sidenav from "../Sidenav";
import classes from "./AdminDash.module.css";

const AdmCandidates = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Candidates</p>
        <p>Logout</p>
        
      </div>
    </div>
  );
};

export default AdmCandidates;
