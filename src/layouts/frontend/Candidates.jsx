import React from "react";
import Sidenav from "./Sidenav";
import classes from "./Userdash.module.css";


const Candidates = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Candidates</p>
      </div>
    </div>
  );
};

export default Candidates;
