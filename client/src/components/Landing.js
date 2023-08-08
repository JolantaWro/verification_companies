import React from "react";
import { Link } from "react-router-dom";
import photoKrs from "../assets/img/landingPage.jpg"

const Landing = () => {
  return (
    <>
      <div className="container">
        
        <div className="jumbotron mt-5">

          <div className="heading">
            <h1 className="heading heading--x-large">Welcome !</h1>
              <p className="heading heading--medium">Sign In and start building your list</p>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/register" className="btn btn-primary ml-3">Register</Link>
              <p className="heading heading--medium">or check Company in KRS</p>
              <Link to="/check" className="btn btn-primary">Check</Link>
          </div>

          <div className="container__img">
            <img src={photoKrs} alt="workdesc"></img>
          </div>

        </div>
        <div className="">
          <div className="footer">
            <h6 className="footer__text">©2023 Created by JolantaWro</h6>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Landing;