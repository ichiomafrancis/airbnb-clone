import React from "react";
import Runner from "../../Images/runner.png";
import Wedding from "../../Images/wedding-photography.png";
import Bike from "../../Images/mountain-bike.png";
import Icon from "../../Images/star.png";
import "./OptionCards.css";

export default function OptionCards() {
  return (
    <div className="option-cards">
      <div className="runner options">
        <img className="pictures" src={Runner} alt="" />
        <p className="rating">
          <img className="icon" src={Icon} alt="" />
          5.0<span className="dim"> (6).USA</span>
        </p>
        <p>Life lessons with Katie Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
        <p className="absolute">SOLD OUT</p>
      </div>

      <div className="wedding options">
        <img className="pictures" src={Wedding} alt="" />
        <p className="rating">
          <img className="icon" src={Icon} alt="" />
          5.0<span className="dim"> (30).USA</span>
        </p>
        <p>Learn wedding photography</p>
        <p>
          <span className="bold">From $125</span> / person
        </p>
        <p className="absolute">ONLINE</p>
      </div>

      <div className="bike options">
        <img className="pictures" src={Bike} alt="" />
        <p className="rating">
          <img className="icon" src={Icon} alt="" />
          4.8<span className="dim"> (2).USA</span>
        </p>
        <p>Group Mountain</p>
        <p>
          <span className="bold">From $50</span> / person
        </p>
        {/* <p className="absolute"></p> */}
      </div>
    </div>
  );
}
