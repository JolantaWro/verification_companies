import React from "react";
import { Link } from "react-router-dom";
import photoKrs from "../assets/img/landingPage.jpg"

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        
        <div className="jumbotron mt-5">

          <div className="landing-menu">
            <h1>Welcome</h1>
              <p>Sign In and start building your list</p>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/register" className="btn btn-primary ml-3">Register</Link>
              <p>or check Company in KRS</p>
              <Link to="/check" className="btn btn-primary">Check</Link>
          </div>

          <div className="landing-photo">
            <img src={photoKrs} alt="workdesc"></img>
          </div>

        </div>
        <div className="landing-footer">
          <div className="landing-footer-info">
            <h6>©2023 Created by JolantaWro</h6>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Landing;