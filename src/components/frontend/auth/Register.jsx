import React, { useState } from "react";
import axios from "axios";
import alert from "alert";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [midname, setMidname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [regno, setRegno] = useState("");
  const [year, setYear]= useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");




  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post(`/api/register`, {
            firstname,
            midname,
            surname,
            email,
            regno,
            year,
            image,
            password,
         
          })
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);
              alert(
                "You have been succ",
                res.data.message,
                "success"
              );
              navigate("/");
            }
          });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Mid Name</label>
                    <input
                      type="text"
                      placeholder="midname"
                      onChange={(e) => setMidname(e.target.value)}
                      value={midname}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Surname</label>
                    <input
                      type="text"
                      placeholder="surname"
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Registration Number</label>
                    <input
                      type="text"
                      placeholder="regno."
                      onChange={(e) => setRegno(e.target.value)}
                      value={regno}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Year of Study</label>
                    <input
                      type="text"
                      placeholder="1,2,3 or 4"
                      onChange={(e) => setYear(e.target.value)}
                      value={year}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Upload Photo</label>
                    <input
                      type="file"
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                      className="form-control"
                    />
                  </div>
                  
              
              

                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="form-control"
                      
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                <p>
                  already have an account? <Link to="/">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
