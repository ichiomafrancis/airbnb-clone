import React from "react";
import Img from "../../Images/runner.png";
import Icon from "../../Images/star.png";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="runner cards">
      <img className="pictures" src={Img} alt="" />
      <p className="rating">
        <img className="icon" src={Icon} alt="" />
        {props.rating}
        <span className="dim">
          {" "}
          ({props.reviewCount}).{props.location}
        </span>
      </p>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
      <p className="absolute">SOLD OUT</p>
    </div>
  );
}
