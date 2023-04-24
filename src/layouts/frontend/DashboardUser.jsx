import React from "react";
import classes from "./Userdash.module.css";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const DashboardUser = () => {
  const [userdetail, setUserdetail] = useState([]);

  useEffect(() => {
    axios.get(`api/dashboard`).then((res) => {
      setUserdetail(res.data.users);
    });
  }, []);

  
    
  



  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
        <Sidenav />
      </div>
      <div className={classes.wrapIn}>
        <div className={classes.content}>
          <Navbar />
        </div>
        <div className={classes.textArea}>
          <div className={classes.rightOps}>
            <p></p>
          </div>
          <br />
          <div className={classes.rightOpsBtm}>
            {userdetail.map((item)=>{
              return (
              <div  >
                <h4>Name</h4>
                <p>{item.firstname}</p>
                <h4>Email</h4>
                <p>{item.email}</p>
                <h4>Year</h4>
                <p>{item.year}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;
