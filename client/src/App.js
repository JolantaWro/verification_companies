import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Navigate
} from "react-router-dom";


import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Landing from "./components/Landing";
import DetailCompany from "./components/dashboard/company/DetailCompany";
import KrsView from "./components/simpleKRS/krsView";



function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={!isAuthenticated ? <Landing /> : <Navigate to="/dashboard" />} />  
            <Route exact path="/login" element={!isAuthenticated ? <Login setAuth={setAuth}/> : <Navigate to="/dashboard" />} />
            <Route exact path="/register" element={!isAuthenticated ? <Register setAuth={setAuth}/>: <Navigate to="/login"/>} />
            <Route exact path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login"/>} />
            <Route path="/details" element={isAuthenticated ? <DetailCompany setAuth={setAuth} /> : <Navigate to="/login"/>} />
            <Route path="/check" element={<KrsView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
