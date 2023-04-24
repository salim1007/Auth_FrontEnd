import React from "react";
import Sidenav from './Sidenav';
import classes from "./Userdash.module.css";

const Procedure = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.content}>
        <p>Procedure</p>
      </div>
    </div>
  );
};

export default Procedure;
