import React from "react";
import "./ticket-sell.css";
import {MdLocationOn} from "react-icons/md";

const TicketSellPage = () => {
  return (
    <div id="ticket-sell-main-container">
      <div id="ticket-sell-large-image-container">
        <div className="inner-container">
         <h1>Tickets for Camp Nou Experience</h1>
         <h3><MdLocationOn id="location"/> Camp Nou, Barcelona Spain</h3>
        </div>
      </div>



      <div className="ticket-sell-operation-container">
     
      </div>
    </div>
  );
};

export default TicketSellPage;
