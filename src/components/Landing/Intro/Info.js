import React from "react";

import icon from 'assets/img/info-title-icon.png'
import "./Info.sass";

export const Info = () => {
  return (
    <section className="info">
      <div className="title">
        <img src={icon} alt="icon" />
        <h4 className="title">Welcome</h4>
      </div>
      <p>
        By the same illusion which lifts the horizon of the sea to the level of
        the spectator on a hillside, the sable cloud beneath was dished out, and
        the car seemed to float in the middle of an immense dark sphere, whose
        upper half was strewn with silver.
      </p>
    </section>
  );
};