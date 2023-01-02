import React from "react";
import "./Header.css";
import Logo from "../../Images/airbnb.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <h3>AirBnb Experiences</h3>
    </div>
  );
}
