import React from "react";
//import CardBtn from "../CardBtn";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.date}, {props.time} - {props.sessionType}</p>
    </div>
    )
};

export default Card;
