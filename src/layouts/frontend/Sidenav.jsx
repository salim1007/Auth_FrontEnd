import React from 'react'
import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { AccountCircle, Feed,PendingActions ,Group, Rule, Ballot, Menu, Search, } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import classes from "./Userdash.module.css";
import "./Link.css";

const routes =[
  {
      path: "/dashboard",
      icon:<AccountCircle    style={{padding: "4"}} />,
      name: "Dashboard"

  },
  {
      path: "/candidates",
      icon:<Group   style={{padding: "4"}} />,
      name:"Candidates"

  },
  {
      path: "/procedure",
      icon: <Rule   style={{padding: "4"}} />,
      name: "Procedure"

  },
  {
      path: "/vote",
      icon:<Ballot   style={{padding: "4"}} />,
      name:"Vote"

  },
  {
      path: "/result",
      icon:<Feed   style={{padding: "4"}} />,
      name:"Result"

  },
  {
      path: "/records",
      icon:<PendingActions   style={{padding: "4"}} />,
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
        {routes.map((route) => (
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