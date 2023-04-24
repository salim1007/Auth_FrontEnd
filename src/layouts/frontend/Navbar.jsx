import React from "react";
import { Link, useNavigate } from "react-router-dom";

import alert from "alert";
import axios from "axios";

const Navbar=()=> {
  const navigate = useNavigate();

  const logoutSubmit = async (e) => {
    e.preventDefault();
    
      await axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        navigate("/");
      }
    });
  };

  var AuthButtons = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButtons = (
      alert("You are not logged in! Actions you perform will not be saved!"),
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Login
          </Link>
        </li>
       
        
      </ul>
    );
  } else {
    AuthButtons = (
      <li>
        <button
          type="button"
          onClick={logoutSubmit}
          className="nav-link btn btn-danger btn-sm text-white"
        >
          Logout 
        </button>
        
       
      </li>
      
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg">
      <div className="container">
       

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{AuthButtons}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
