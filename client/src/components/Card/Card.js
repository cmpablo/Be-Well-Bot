import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.date}, {props.time} - {props.type}</p>
    </div>
    )
};

export default Card;
