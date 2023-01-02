import React from "react";
import Group from "../Images/group-77.png";
import "./Experiences.css";

export default function Experiences() {
  return (
    <div className="experiences">
      <div className="group">
        <img className="group-pictures" src={Group} alt="" />
      </div>

      <div className="info">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
