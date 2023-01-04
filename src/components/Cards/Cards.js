import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="cards">
      <img
        className="pictures"
        src={require(`../../Images/${props.img}`)}
        alt=""
      />
      <div className="cards--info">
        <div className="rating">
          <img className="icon" src={require("../../Images/star.png")} alt="" />
          <span>{props.rating}</span>
          <span className="dim">
            ({props.reviewCount}) * <span>{props.location}</span>
          </span>
        </div>
      </div>

      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
      <p className="absolute">SOLD OUT</p>
    </div>
  );
}
