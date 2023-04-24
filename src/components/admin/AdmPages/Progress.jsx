import React from "react";
import Sidenav from "../Sidenav";
import classes from "./AdminDash.module.css";

const Progress = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Progress</p>
      </div>
    </div>
  );
};

export default Progress;
