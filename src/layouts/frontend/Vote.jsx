import React from 'react'
import Sidenav from './Sidenav';
import classes from "./Userdash.module.css";

const Vote = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidenav}>
      <Sidenav/>
      </div>
      <div className={classes.content}>
        <p>Vote</p>
      </div>
     
      
    </div>
  )
}

export default Vote