import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="group">
        <img
          className="group-pictures"
          src={require("../../Images/photo-grid.png")}
          alt=""
        />
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
