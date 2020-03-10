import React from "react";

import './Services.sass';

import serviceOne from 'assets/img/service-1.png';
import serviceTwo from 'assets/img/service-2.png';
import serviceThree from 'assets/img/service-3.png';

export const Services = () => {
  return (
    <section className="services">
      <h2 className="title">What we do</h2>

      <div className="group">
        <div className="service">
          <img src={serviceOne} alt=""/>
          <h2>By the same illusion which lifts the horizon.</h2>
          <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
        </div>
        <div className="service">
          <img src={serviceTwo} alt=""/>
          <h2>By the same illusion which lifts the horizon.</h2>
          <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
        </div>
        <div className="service">
          <img src={serviceThree} alt=""/>
          <h2>By the same illusion which lifts the horizon.</h2>
          <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
        </div>
      </div>
    </section>
  )
};