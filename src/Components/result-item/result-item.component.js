import React from "react";

import Card from "../card/card.component";

import Classes from "./result-item.styles.css";

const ResultItem = ({ cardItems }) => (
  <div>
    {cardItems.map(cardItem => {
      <Card title={cardItem.title} text={cardItem.text} />;
    })}
  </div>
);

export default ResultItem;
