import React from "react";
import Sidenav from "../Sidenav";
import classes from "./AdminDash.module.css";

const AddCandidate = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Add candidates</p>
      </div>
    </div>
  );
};

export default AddCandidate;
