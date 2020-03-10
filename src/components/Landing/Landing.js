import React from "react";

import { Header } from "./Header";
import "./Landing.sass";

import { Info } from "./Intro";
import { Services } from "./Services";
import { Steps } from "./Steps/Steps";
import { Features } from "./Features";
import { Clients } from "./Clients";
import { Apply } from "./Apply";
import { Footer } from "./Footer";

export const Landing = () => {
  return (
    <div className="landing">
      <Header />
      <Info />
      <Services />
      <Steps />
      <Features />
      <Clients />
      <Apply />
      <Footer />
    </div>
  );
};