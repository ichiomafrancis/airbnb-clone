import React from "react";
import "./Cards.css";

export default function Cards(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="cards">
      {badgeText && <div className="absolute">{badgeText}</div>}
      <img
        className="pictures"
        src={require(`../../Images/${props.coverImg}`)}
        alt=""
      />
      <div className="cards--info">
        <div className="rating">
          <img className="icon" src={require("../../Images/star.png")} alt="" />
          <span>{props.stats.rating}</span>
          <span className="dim">
            {`(${props.stats.reviewCount}) * `}
            <span>{props.location}</span>
          </span>
        </div>
      </div>

      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
