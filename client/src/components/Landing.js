import React from "react";
import { Link } from "react-router-dom";
import photoKrs from "../assets/img/landingPage.jpg"

const Landing = () => {
  return (
    <>
      <div className="landing-container">
        
        <div className="jumbotron mt-5">

          <div className="landing-menu">
            <h1>Witaj !</h1>
              <p>Zaloguj się i zacznij budować swoją listę,</p>
              <Link to="/login" className="btn btn-primary">Logowanie</Link>
              <Link to="/register" className="btn btn-primary ml-3">Rejestracja</Link>
              <p>bądź sprawdź w KRS</p>
              <Link to="/check" className="btn btn-primary">Szukaj</Link>
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