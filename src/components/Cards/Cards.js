import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="runner cards">
      <img
        className="pictures"
        src={require(`../../Images/${props.img}`)}
        alt=""
      />
      <p className="rating">
        <img className="icon" src={require("../../Images/star.png")} alt="" />
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
