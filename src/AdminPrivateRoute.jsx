import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MasterLayout from "./layouts/admin/MasterLayout";
import alert from "alert";

const AdminPrivateRoute = () => {
  const navigate = useNavigate();

  const [Authenticated, setAuthenticated] = useState(false);


  useEffect(() => {
    axios.get(`/api/checkingAuthenticated`).then((res) => {
      if (res.status === 200) {
        setAuthenticated(true);
      }
    
    });

    return () => {
      setAuthenticated(false);
    };
  }, []);

  axios.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err) {
      if (err.response.status === 401) {
        alert("Unauthorized", err.response.data.message, "warning");
        navigate("/");
      }
      return Promise.reject(err);
    }
  );

//   axios.interceptors.response.use(
//     function (response) {
//       return response;
//     },
//     function (error) {
//       if (error.response.status === 403) {
//         // Access Denied
//         alert("Forbidden", error.response.data.message, "warning");
//         navigate("/403");
//       } else if (error.response.status === 404) {
//         //Page Not Found
//         alert("404", "Page Not Found", "warning");
//         navigate("/404");
//       }
//       return Promise.reject(error);
//     }
//   );

 

  const Auther = () => {
    if (Authenticated) {
      <div>
        <MasterLayout />
      </div>;
    } else {
      <Link to="/login" />;
    }
  };

  return (
    <div>
      <Auther />
    </div>
  );
};

export default AdminPrivateRoute;
