import React from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
// import Logo from "./src/images_vids/logo_waffle-removedbg.png";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
            {/* <img src = {Logo} alt = "logo"/> */} logo
        </div>

        <ul className="nav-menu">
            <li className="nav-item"><a href="">home</a></li>
            <li className="nav-item"><a href="">about</a></li>
            <li className="nav-item"><a href="">contact</a></li>
        </ul>

        <div className="hamburger">
            <FaBars />
        </div>

        </div>
    )
}

export default Navbar