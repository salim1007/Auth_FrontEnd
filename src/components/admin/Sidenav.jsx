import React from 'react'
import { useState } from 'react';
import {NavLink} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import classes from "./AdmPages/AdminDash.module.css";
import { AccountCircle, GroupAdd, Groups, AccessTime, HourglassBottom, Feed, PendingActions, Menu, Search } from '@mui/icons-material'
import "./AdmPages/Link.css"

const paths =[
    {
        path: "/admin/dashboard",
        icon:<AccountCircle  style={{padding: "3"}} />,
        name:"Dashboard"

    },
    {
        path: "/adm-candidates",
        icon:<Groups  style={{padding: "3"}} />,
        name:"Candidates"

    },
    {
        path: "/add-candidate",
        icon:<GroupAdd  style={{padding: "3"}} />,
        name:"Add Candidate"

    },
    {
        path: "/set-duration",
        icon:<AccessTime  style={{padding: "3"}} />,
        name:"Set Duration"

    },
    {
        path: "/progress",
        icon:<HourglassBottom  style={{padding: "3"}} />,
        name:"Progress"

    },
    {
        path: "/adm-result",
        icon:<Feed  style={{padding: "3"}} />,
        name:"Result"

    },  
    {
        path: "/adm-records",
        icon:<PendingActions  style={{padding: "3"}} />,
        name:"Records"

    },  

]


const Sidenav = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => {
    setIsOpen(!isOpen);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className={classes.maincontainer}>
      <motion.div
        animate={{
          width: isOpen ? "230px" : "50px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className={classes.sidebar}
      >
        <div className={classes.topSection}>
          {isOpen && (
            <motion.h1
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={showAnimation}
              className={classes.menu}
            >
              Welcome{" "}
            </motion.h1>
          )}
          <div>
            <Menu onClick={Toggle}  style={{padding: "3", cursor: "pointer"}} />
          </div>
        </div>
        <div className={classes.search}>
          <div>
            <Search onClick={Toggle}  style={{padding: "3"}}  />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search......"
              />
            )}
          </AnimatePresence>
        </div>

        <section>
          {paths.map((route) => (
            <NavLink
              to={route.path}
              key={route.name}
              className={classes.link}
              
            >
              <AnimatePresence>
                <div>{route.icon}</div>
                {isOpen && (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={showAnimation}
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );

}

export default Sidenav;