import React, {useState} from "react";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../images_vids/logo_waffle-removedbg.png";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return(
        <div className="navbar">
        <div className="logo">
            <img src = {Logo} alt = "logo"/>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"><a href="">home</a></li>
            <li className="nav-item"><a href="">about</a></li>
            <li className="nav-item"><a href="">contact</a></li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes />) : (<FaBars />)}
        </div>

        </div>
    )
}

export default Navbar