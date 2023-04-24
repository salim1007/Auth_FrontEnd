import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import MasterLayout from "./layouts/admin/MasterLayout";
import Register from "./components/frontend/auth/Register";
import Login from "./components/frontend/auth/Login";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PublicRoute from "./PublicRoute";

import AdmCandidates from "./components/admin/AdmPages/AdmCandidates";
import AdmRecords from "./components/admin/AdmPages/AdmRecords";
import AdmResults from "./components/admin/AdmPages/AdmResults";
import Progress from "./components/admin/AdmPages/Progress";
import SetDuration from "./components/admin/AdmPages/SetDuration";
import AddCandidate from "./components/admin/AdmPages/AddCandidate";

import Candidates from "./layouts/frontend/Candidates";
import Procedure from "./layouts/frontend/Procedure";
import Records from "./layouts/frontend/Records";
import Result from "./layouts/frontend/Result";
import Vote from "./layouts/frontend/Vote";

import axios from "axios";

import Dashboard from "./components/admin/AdmPages/Dashboard";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

const App = () => {
  return (
    <div className="App">
      <Router>
        <AdminPrivateRoute path="/admin" name="Admin" />

        <PublicRoute path="/" name="Home" />
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />}></Route>
{/* admin routes */}
          <Route path="/admin/dashboard/" element={<Dashboard />} />
          <Route path="/adm-candidates" element={<AdmCandidates />} />
          <Route path="/add-candidate" element={<AddCandidate />} />
          <Route path="/set-duration" element={<SetDuration />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/adm-result" element={<AdmResults />} />
          <Route path="/adm-records" element={<AdmRecords />} />
{/* User routes */}
        
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/result" element={<Result />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
