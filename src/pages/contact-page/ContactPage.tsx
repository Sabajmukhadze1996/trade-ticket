import React from "react";
import "./contact-page.css";
import contactImg from "../../images/contact-phone.jpg"

const ContactPage: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="content-container">
        <h1 className="title">Contact Us</h1>
        <p className="description">
          The address will be added soon,
          <br /> but you can email us...
        </p>
        <div className="form-container">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
              e.preventDefault()
            }
          >
            <div className="input-container">
              <label htmlFor="name" placeholder="username...">Username</label>
              <input type="text" placeholder="username..." id="name" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="email..." id="email" />
            </div>
            <div className="input-container">
              <label htmlFor="message">Message</label>
              <textarea placeholder="message..." id="message" rows={5} className="message-textarea" />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="image-container">
        <img
          className="image"
          src={contactImg}
          alt="random image 1"
        />
      </div>
    </div>
  );
};

export default ContactPage;
