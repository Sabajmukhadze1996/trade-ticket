import React from "react";
import "./ticket-sell.css";
import { MdLocationOn } from "react-icons/md";
import { IoMdCloudUpload } from "react-icons/io";

const TicketSellPage = () => {
  return (
    <div id="ticket-sell-main-container">
      <div id="ticket-sell-large-image-container">
        <div className="inner-container">
          <h1>Tickets for Camp Nou Experience</h1>
          <h3>
            <MdLocationOn id="location" /> Camp Nou, Barcelona Spain
          </h3>
        </div>
      </div>

      <div className="ticket-sell-operation-container">
        <h1>Sell a Ticket</h1>
        <div className="ticket-upload-container">
          <IoMdCloudUpload size={55} color="#c4c4c4" />
        </div>
      </div>
      <div className="ticket-sell-input-container">
        <div className="ticket-sell-input-inner-container">
          <label htmlFor="buyers-pay" className="buyers-pay-label">
            Buyers Pay
          </label>
          <input type="text" id="buyers-pay" />
        </div>
        <div className="ticket-sell-input-inner-container">
          <label htmlFor="you-receive" className="your-receive-label">
            Your Receive
          </label>
          <input type="text" id="you-receive" />
        </div>
      </div>

      <div className="checkbox-agreement-container">
        <input type="checkbox" id="agreement-checkbox" />
        &nbsp;&nbsp;
        <label htmlFor="agreement-checkbox">
          I agree to the terms of the Trade TKT arrangment
        </label>
      </div>
      <div className="sell-btn-container">
        <button className="sell-btn">Sell</button>
      </div>
    </div>
  );
};

export default TicketSellPage;
