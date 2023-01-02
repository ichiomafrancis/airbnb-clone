import React from "react";
import Group from "../../Images/group-77.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="group">
        <img className="group-pictures" src={Group} alt="" />
      </div>

      <div className="info">
        <h1>Online Hero</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
