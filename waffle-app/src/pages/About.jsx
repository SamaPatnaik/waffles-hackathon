import React from "react"
import "../pages/About.css"
import Navbar from "../components/Navbar.jsx"
import prof1 from "../images_vids/nezuko.jpg"
import prof2 from "../images_vids/profilepic_teammate_wafflehacks.png"
import prof3 from "../images_vids/profilepic_teammate2_wafflehacks.png"

const About = () => {
    return (
    <div className="about-container">
        <Navbar />
      <div className="profile-wrapper">
        <div className="profile">
          <img src={prof1} alt="Profile 1" />
          <h1 className="prof1">discord: papichulo0244</h1>
          <ul><li>responsible for the normalcy in naming things</li></ul>
          <ul><li>anime fan who asks a lot of questions</li></ul>
          <ul><li>University of British Columbia</li></ul>
        </div>
      </div>
      <div className="profile-wrapper">
        <div className="profile">
          <img src={prof2} alt="Profile 2" />
          <h1 className="prof2">discord: _theladybug</h1>
          <ul><li>bro's entire personality is making bad puns (rlly smart tho)</li></ul>
          <ul><li>lightning speed at what she does - kachow</li></ul>
          <ul><li>University of Waterloo</li></ul>
        </div>
      </div>
      <div className="profile-wrapper">
        <div className="profile">
          <img src={prof3} alt="Profile 3" />
          <h1 className="prof3">discord: .nsp.</h1>
          <ul><li>beefy resume, devpost and github (very helpful and patient)</li></ul>
          <ul><li>god at backend (again, rlly smart)</li></ul>
          <ul><li>University of Maryland</li></ul>
        </div>
      </div>
    </div>
    );
}

export default About;
