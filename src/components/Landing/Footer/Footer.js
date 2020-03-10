import React from "react";

import "./Footer.sass";

import icon from "assets/img/info-title-icon.png";
import instagram from "assets/img/instagram.png";
import facebook from "assets/img/facebook-square.png";
import twitter from "assets/img/twitter-square.png";

export const Footer = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Data was sent');
    event.target.reset();
  };

  return (
    <footer className="footer">
      <div className="communicate">

        <div className="message">
          <div className="title">
            <img src={icon} alt="icon" />
            <h4 className="title">Send us  a message</h4>
          </div>
          <form name="send-message" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Your email" required={true}/>
            <input type="text" name="name" placeholder="Your name" required={true}/>
            <input type="text" name="message" placeholder="Your message" required={true}/>
            <button className>Send</button>
          </form>
        </div>

        <div className="address">
          <div className="title">
            <img src={icon} alt="icon" />
            <h4 className="title">Contact us</h4>
          </div>
          <h2>By the same illusion which lifts the horizon.</h2>

          <div className="contacts">
            <h5 className="title">Call us</h5>
            <h2 className="info">654 321 987</h2>
          </div>
          <div className="contacts">
            <h5 className="title">Visit us</h5>
            <h2 className="info">2905 West Drive, Buffalo Grove</h2>
          </div>

          <div className="nets">
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>

      <div className="footer-menu">
        <p className="author">Design by @mariuszdaniel</p>
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#aboutUs">About us</a>
          <a href="#services">Services</a>
          <a href="#word">Work</a>
          <a href="#contactUs">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};