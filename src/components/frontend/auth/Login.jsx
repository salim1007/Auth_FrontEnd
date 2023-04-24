import React, { useState } from "react";

import axios from "axios";
import alert from "alert";
import { Link, useNavigate } from "react-router-dom";

const  Login=()=> {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginSubmit = async (e) => {
    e.preventDefault();
    try{
        await axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.post(`api/login`, {email, password}).then((res) => {
               if (res.data.status === 200) {
                 localStorage.setItem("auth_token", res.data.token);
                 localStorage.setItem("auth_name", res.data.username);
           
                 if (res.data.role === "admin") {
                   navigate("/admin/dashboard");
                 } else {
                  navigate("/dashboard");
                 }
               } else if (res.data.status === 401) {
                 alert("Warning!", res.data.message, "warning");
               } 
             })
           })
        }catch(err){
            console.log(err);
        }
    }

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Login</h4>
              </div>
              <div className="card-body">
                <form onSubmit={loginSubmit}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="email"
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      className="form-control"
                    />
                   
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      onChange={(e)=>setPassword(e.target.value)}
                      value={password}
                      className="form-control"
                    />
             
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <p>don't have an account yet? <Link  to="/register" >Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
