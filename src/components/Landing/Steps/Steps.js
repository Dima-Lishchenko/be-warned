import React from "react";

import "./Steps.sass";

import icon from "assets/img/info-title-icon.png";

import one from "assets/img/1.png";
import two from "assets/img/2.png";
import three from "assets/img/3.png";
import four from "assets/img/4.png";

import oneBg from "assets/img/point-1-bg.png";
import twoBg from "assets/img/point-2-bg.png";
import threeBg from "assets/img/point-3-bg.png";
import fourBg from "assets/img/point-4-bg.png";

export const Steps = () => {
  return (
    <section className="steps">
      <div className="info">
        <div className="title">
          <img src={icon} alt="icon" />
          <h4 className="title">Process</h4>
        </div>
        <h2 className="title">By the same illusion which lifts the horizon.</h2>
        <p>
          By the same illusion which lifts the horizon of the sea to the level
          of the spectator on a hillside, the sable cloud beneath was dished
          out, and the car seemed to float in the middle of an immense dark
          sphere, whose upper half was strewn with silver.
        </p>
      </div>
      <div className="points">
        <div className="wrapper">
        <div className="block">
            <img src={one} alt="one"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
          <img src={oneBg} className="point-bg" alt="background icon"/>
        </div>
        <div className="wrapper">
        <div className="block">
            <img src={two} alt="one"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
          <img src={twoBg} className="point-bg" alt="background icon"/>

        </div>
        <div className="wrapper">
        <div className="block">
            <img src={three} alt="one"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>
          <img src={threeBg} className="point-bg" alt="background icon"/>
        </div>
        <div className="wrapper">
        <div className="block">
            <img src={four} alt="one"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
          </div>

          <img src={fourBg} className="point-bg" alt="background icon"/>
        </div>
      </div>
    </section>
  );
};