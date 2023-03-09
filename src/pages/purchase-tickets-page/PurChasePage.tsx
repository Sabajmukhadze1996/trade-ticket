import React from "react";
import "./purchase-page.css";

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
            <td data-label="Name">verified</td>
            <td data-label="Status">Giorgi Maisuradze</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">40₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">12 Oct, 21</td>
            <td data-label="Name">Unverified</td>
            <td data-label="Status">Natalia Parthkanadze</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">50₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">1 Nov, 21</td>
            <td data-label="Name">Verified</td>
            <td data-label="Status">Tamta Davitaia </td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">50₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">19 Oct, 21</td>
            <td data-label="Name">Verified</td>
            <td data-label="Status">Travis head</td>
            <td data-label="Customer">ZEC Tbilisi Storytelling Festival</td>
            <td data-label="Purchased">60₾</td>
            <td data-label="Buy">
              <button>Buy</button>
            </td>
          </tr>

          <tr>
            <td data-label="Date">1 Oct, 21</td>
            <td data-label="Name">Verified</td>
            <td data-label="Status">Nino Kurashvili</td>
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
