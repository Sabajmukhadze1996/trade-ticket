import React from "react";
import "./header.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";



const Header = () => {
  return (
    <header id="header">
      <div className="header-inner-container">
        <div className="left-container">
          <p>
            <BsTelephoneFill id="phone-icon" /> &nbsp; (+995) 555 667788
          </p>
          &nbsp;
          <p>
            <MdOutlineEmail id="email-icon" /> &nbsp; tickets@ticket.ge
          </p>
        </div>
        <div className="right-container">
          <p className="signin-text">SIGN IN </p>|<p className="signup-text">SIGN UP</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
