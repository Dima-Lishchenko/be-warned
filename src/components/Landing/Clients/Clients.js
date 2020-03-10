import React from "react";

import "./Clients.sass";

import bg from "assets/img/blob.png";
import icon from "../../../assets/img/info-title-icon.png";

import client1 from 'assets/img/client-1.png'
import client1Bg from 'assets/img/client-1-bg.png'
import client2 from 'assets/img/client-2.png'
import client2Bg from 'assets/img/client-2-bg.png'
import client3 from 'assets/img/client-3.png'
import client3Bg from 'assets/img/client-3-bg.png'

export const Clients = () => {
  return (
    <section className="clients">
      <img src={bg} className="blob" alt="background" />

      <div className="wrapper">
        <div className="title">
          <img src={icon} alt="icon" />
          <h4 className="title">Testimonials</h4>
        </div>
        <h2>By the same illusion which lifts the horizon.</h2>

        <div className="clients-group">
          <div className="client">
            <div className="logo">
              <img src={client1Bg} alt="bg" className="bg"/>
              <img src={client1} alt="client" className="photo"/>
            </div>
            <p className="review">“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
            <div className="line" />

            <div className="info">
              <p className="name">John Wayne</p>
              <h2 className="position">CEO</h2>
            </div>
          </div>
          <div className="client">
            <div className="logo">
              <img src={client2Bg} alt="bg" className="bg"/>
              <img src={client2} alt="client" className="photo"/>
            </div>
            <p className="review">“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
            <div className="line" />

            <div className="info">
              <p className="name">John Wayne</p>
              <h2 className="position">CEO</h2>
            </div>
          </div>

          <div className="client">
            <div className="logo">
              <img src={client3Bg} alt="bg" className="bg"/>
              <img src={client3} alt="client" className="photo"/>
            </div>
            <p className="review">“By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.”</p>
            <div className="line" />

            <div className="info">
              <p className="name">John Wayne</p>
              <h2 className="position">CEO</h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};