import React from 'react'
import Sidenav from "../Sidenav";
import classes from "./AdminDash.module.css";
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
      <Sidenav/>
      </div>
      <div className={classes.content}>
       <Navbar/>
      </div>
     
      
    </div>
  );
};

export default Dashboard;
