import React from "react";

import BillOfWorkCard from "./bill-of-work-card.component";
import TaskCard from "./task-card.component";

import Utils from "../../utils.js";

import Classes from "./card.styles.css";

const Card = ({
  id,
  domain,
  discriminator,
  text,
  taskCardTypeName,
  billOfWorkName,
  description,
  plannedAircraftDeliveryDate,
  revisedAircraftDeliveryDate,
  statusTypeName,
  actualCheckLength,
  aircraftTailNumber,
  billOfWorkId,
  taskCardName,
  billOfWorkDiscriminator
}) => (
  <div className={Classes.Card}>
    {domain === Utils.BIIL_OF_WORK ? (
      <BillOfWorkCard
        id={id}
        discriminator={discriminator}
        text={text}
        plannedAircraftDeliveryDate={plannedAircraftDeliveryDate}
        revisedAircraftDeliveryDate={revisedAircraftDeliveryDate}
        statusTypeName={statusTypeName}
        actualCheckLength={actualCheckLength}
        aircraftTailNumber={aircraftTailNumber}
      />
    ) : (
      <TaskCard
        discriminator={discriminator}
        text={text}
        id={id}
        description={description}
        taskCardTypeName={taskCardTypeName.join(" ")}
        billOfWorkName={billOfWorkName.join(" ")}
        taskCardName={taskCardName.join(" ")}
        billOfWorkId={billOfWorkId}
        billOfWorkDiscriminator={billOfWorkDiscriminator}
      />
    )}
  </div>
);

export default Card;
