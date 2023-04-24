import React from "react";
import Sidenav from "../Sidenav";
import classes from "./AdminDash.module.css";

const SetDuration = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Duration</p>
      </div>
    </div>
  );
};

export default SetDuration;
