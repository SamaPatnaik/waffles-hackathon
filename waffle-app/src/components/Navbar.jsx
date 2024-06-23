import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images_vids/logo_waffle-removedbg.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/">home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about">about</Link>
        </li>
        <li className="nav-item">
        <Link to="/contacts">contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
