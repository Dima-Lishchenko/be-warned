import React from "react";

import './Features.sass';
import icon from "assets/img/features-title-icon.png";
import point1 from "assets/img/features-icon-1.png";
import point2 from "assets/img/features-icon-2.png";
import point3 from "assets/img/features-icon-3.png";

export const Features = () => {
  return (
    <section className="features">
      <div className="info">
        <div className="title">
          <img src={icon} alt="icon" />
          <h4 className="title">Features</h4>
        </div>
        <h2>By the same illusion which lifts the horizon.</h2>
        <div className="points">
          <div className="block">
            <img src={point1} alt="icon 1"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.</p>
          </div>
          <div className="block">
            <img src={point2} alt="icon 2"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.</p>
          </div>
          <div className="block">
            <img src={point3} alt="icon 3"/>
            <p>By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out.</p>
          </div>
        </div>
    </div>
    </section>
  )
};