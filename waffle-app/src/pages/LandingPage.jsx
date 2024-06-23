import React from "react";
import "./LandingPage.css";
import pic from "../assets/homepage-image.png";
import { Link } from "react-router-dom";

const LandingPage = ({ callback }) => {
  return (
    <div className="lpgbody">
      <div className="left-wrapper">
        <div className="content">
          <h1>
            Empower your health with the support{" "}
            <span className="deserve">you deserve.</span>
          </h1>
          {/* <p>It's easy! Connect with professionals in your area tailored to your preferences,
      & make lifelong friends who understand you.</p>
      <button>sign in</button> */}
        </div>

        <div className="para">
          <p>
            It's easy! Connect with professionals in your area tailored to your
            preferences, & make lifelong friends who understand you.
          </p>
          <Link to="/main">
            <button className="button">try chatbot</button>
          </Link>
        </div>
      </div>

      <img src={pic} className="home-image"></img>
      {/* <div className='signin'>
        <button>sign in</button>
      </div> */}
    </div>
  );
};

export default LandingPage;
