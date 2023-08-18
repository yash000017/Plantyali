import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <div className="header">
            <div className="container">
                <div className="nav">
                    <div className="nav-img">
                        <img src="plantyali-logo.png" alt="img" className="nav-img-wrapper"></img>
                    </div>
                    <div className="nav-link">
                        <div className="nav-link-wrapper">
                            <NavLink to="/">Home</NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/about">About</NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/contact">Contact Us</NavLink> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
