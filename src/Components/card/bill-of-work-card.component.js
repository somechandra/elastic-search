import React from "react";

import Classes from "./card.styles.css";

const BillOfWorkCard = ({
  text,
  aircraftTailNumber,
  actualCheckLength,
  plannedAircraftDeliveryDate,
  revisedAircraftDeliveryDate,
  statusTypeName
}) => {
  const deliveryDate = revisedAircraftDeliveryDate
    ? new Date(revisedAircraftDeliveryDate)
    : new Date(plannedAircraftDeliveryDate);
  return (
    <div className={Classes.CardA}>
      <div className={Classes.Additional}>
        <div className={Classes.UserCard}>
          <span>WO</span>
        </div>
        <div className={Classes.MoreInfo}>
          <div className={Classes.CardTitle}>{text}</div>
          <div className={Classes.CardText}>
            {actualCheckLength} | {formattedDate(deliveryDate)} |{" "}
            {statusTypeName}
          </div>
        </div>
      </div>
      <div className={Classes.General}>
        <div className={Classes.CardTitle}>{text}</div>
        <div className={Classes.CardText}>{aircraftTailNumber}</div>
      </div>
    </div>
  );
};

const appendLeadingZeroes = n => {
  if (n <= 9) {
    return "0" + n;
  }
  return n;
};
const formattedDate = date => {
  let formatted_date =
    appendLeadingZeroes(date.getMonth() + 1) +
    "-" +
    appendLeadingZeroes(date.getDate()) +
    "-" +
    date.getFullYear();
  return formatted_date;
};

export default BillOfWorkCard;
