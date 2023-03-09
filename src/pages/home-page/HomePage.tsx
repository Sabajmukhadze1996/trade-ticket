import React from "react";
import "./home-page.css";
import {MdLocationOn} from "react-icons/md";
import {NavLink} from "react-router-dom";

const HomePage = () => {
  return (
    <div id="homepage-container">
      <div className="inner-container">
        <div className="title-container">
          <span className="first-span">KAYAKATA ON 7</span>&nbsp;
          <span className="second-span">LIVE CONCERT</span>
        </div>
        <div className="location-container">
          <p className="first-span"><MdLocationOn id="location-icon"/> Dinamo, Tbilisi, Georgia</p>
        </div>
        <div className="btns-container">
           <NavLink to="/purchase"><button className="first-btn">PURCHASE TICKETS NOW</button></NavLink>
           <button className="second-btn">SELL TICKETS NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
