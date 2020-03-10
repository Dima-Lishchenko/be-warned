import React from "react";
import { Link } from "react-router-dom";

import "./Header.sass";
import img from "assets/img/carousel-photo.jpg";

export const Header = () => {
  return (
    <header className="header">
      <nav className="menu pt-5 d-flex align-items-center justify-content-center">
        <h2 className="company d-inline">DIA</h2>

        <Link to="#" className="link">
          Home
        </Link>
        <Link to="#" className="link">
          About Us
        </Link>
        <Link to="#" className="link">
          Services
        </Link>
        <Link to="#" className="link">
          Work
        </Link>
        <Link to="#" className="link">
          Contact Us
        </Link>
        <Link to="#" className="link active">
          Hire us
        </Link>
      </nav>

      <div className="info">
        <h1 className="title">Global digital agency</h1>
        <h4 className="description">
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath.
        </h4>
        <button className="more">Learn more</button>
      </div>

      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="img 1" />
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="img 2" />
          </div>
          <div className="carousel-item">
            <img src={img} className="d-block w-100" alt="img 3" />
          </div>
        </div>
        <div className="controls">
          <a
            className="carousel-control-prev"
            href="#carousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>

        <h4 className="title">INtro</h4>
        <p className="description">
          By the same illusion which lifts the horizon.
        </p>

        <div className="nets">
          <a href="https://facebook.com">facebook</a>
          <a href="https://twitter.com">twitter</a>
          <a href="https://instagram.com">instagram</a>
        </div>
      </div>
    </header>
  );
};