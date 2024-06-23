import React from "react";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <p className="contacts">Contacts</p>
      <div className="people">
        <div className="person">
          <p className="person-name">Sama Patnaik</p>
          <p className="person-info">
            Email: <br />
            <a className="contact-info">samapatnaik22@gmail.com</a>
          </p>
          <p className="person-info">
            LinkedIn:
            <br />
            <a
              className="contact-info"
              href="https://www.linkedin.com/in/sama-patnaik-191319229/"
            >
              https://www.linkedin.com/in/sama-patnaik-191319229/
            </a>
          </p>
          <p className="person-info">
            GitHub:
            <br />
            <a className="contact-info" href="https://github.com/SamaPatnaik">
              https://github.com/SamaPatnaik
            </a>
          </p>
        </div>
        <div className="person">
          <p className="person-name">Priyadarshan Narayanasamy</p>
          <p className="person-info">
            Email:<br></br>
            <a className="contact-info">nspd@umd.edu</a>
          </p>
          <p className="person-info">
            LinkedIn:<br></br>
            <a className="contact-info" href="https://www.linkedin.com/in/nspd">
              https://www.linkedin.com/in/nspd
            </a>
          </p>
          <p className="person-info">
            GitHub:<br></br>
            <a className="contact-info" href="https://github.com/NSP909">
              https://github.com/NSP909
            </a>
          </p>
        </div>
        <div className="person">
          <p className="person-name">Akshaya Varakunan</p>
          <p className="person-info">
            Email: <br></br>
            <a className="contact-info"> avarakun@uwaterloo.ca</a>
          </p>
          <p className="person-info">
            LinkedIn:<br></br>
            <a
              className="contact-info"
              href="https://www.linkedin.com/in/akshaya-varakunan/"
            >
              https://www.linkedin.com/in/akshaya-varakunan/
            </a>
          </p>
          <p className="person-info">
            GitHub:<br></br>
            <a className="contact-info" href="https://github.com/ladybugv">
              https://github.com/ladybugv
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
