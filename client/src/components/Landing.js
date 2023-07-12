import React from "react";
import { Link } from "react-router-dom";
import photoKrs from "../assets/img/landingPage.jpg"

const Landing = () => {
  return (
    <>
      <div className="container">
        
        <div className="jumbotron mt-5">

          <div className="heading">
            <h1 className="heading heading--x-large">Witaj !</h1>
              <p className="heading heading--medium">Zaloguj się i zacznij budować swoją listę przedsiębiorstw,</p>
              <Link to="/login" className="btn btn-primary">Logowanie</Link>
              <Link to="/register" className="btn btn-primary ml-3">Rejestracja</Link>
              <p className="heading heading--medium">bądź wyszukaj aktualne dane w KRS</p>
              <Link to="/check" className="btn btn-primary">Szukaj</Link>
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