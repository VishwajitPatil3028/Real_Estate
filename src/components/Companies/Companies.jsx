import React from "react";
import prologis from "../../assets/prologis.png";
import tower from "../../assets/tower.png";
import equinix from "../../assets/equinix.png";
import realty from "../../assets/realty.png";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={realty} alt="" />
      </div>
    </section>
  );
};

export default Companies;
