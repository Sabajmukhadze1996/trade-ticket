import React from "react";
import "./purchase-page.css";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineDangerous } from "react-icons/md";
import { GiFemaleVampire } from "react-icons/gi";
import { GiNurseFemale } from "react-icons/gi";

const PurChasePage = () => {
  return (
    <div id="purchase-page-container">
      <h1 className="title">Purchase Ticket</h1>
      <div className="sell-btn-container">
        <button className="sell-btn">Sell a ticket</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th className="table-titles">Date</th>
            <th className="table-titles">Status</th>
            <th className="table-titles">Customer</th>
            <th className="table-titles">Purchased</th>
            <th className="table-titles">Price</th>
            <th className="table-titles">Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Date">1 Oct, 21</td>
            <td data-label="Name">
              <MdOutlineVerified id="verified-logo" color="#06ac06"/> Verified
            </td>
            <td data-label="Status"><GiNurseFemale id="verified-logo" color="#0d47b4"/> Giorgi Maisuradze</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">40₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">12 Oct, 21</td>
            <td data-label="Name">
              <MdOutlineDangerous id="verified-logo" color="crimson" size={18} /> Unverified
            </td>
            <td data-label="Status"><GiFemaleVampire id="verified-logo" color="darkorange"/> Natalia Parthkanadze</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">50₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">1 Nov, 21</td>
            <td data-label="Name">
              <MdOutlineVerified id="verified-logo" color="#06ac06"/> Verified
            </td>
            <td data-label="Status"><GiFemaleVampire color="darkorange"/> Tamta Davitaia </td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">50₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">19 Oct, 21</td>
            <td data-label="Name">
              <MdOutlineVerified id="verified-logo" color="#06ac06"/> Verified
            </td>
            <td data-label="Status"><GiNurseFemale id="verified-logo" color="#0d47b4"/> Travis head</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">60₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">1 Oct, 21</td>
            <td data-label="Name">
              <MdOutlineVerified id="verified-logo" color="#06ac06"/> Verified
            </td>
            <td data-label="Status"><GiFemaleVampire id="verified-logo" color="darkorange"/> Nino Kurashvili</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">70₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PurChasePage;
