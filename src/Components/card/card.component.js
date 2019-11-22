import React from "react";

import Classes from "./card.styles.css";

const Card = ({ title, text }) => (
  <div className={Classes.Card}>
    <div className={Classes.CardBody}>
      <span className={Classes.CardTitle}>{title}</span>
      <p className={Classes.CardText}>{text}</p>
    </div>
  </div>
);

export default Card;
