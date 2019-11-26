import React from "react";

import Card from "../card/card.component";

import Classes from "./result-item.styles.css";

const ResultItem = ({ records }) => (
  <div className={Classes.Results}>
    {records.map(record => {
      return (
        <Card
          key={record.id}
          title={record.discriminator}
          text={record.name}
          description={record.description}
          domain={record.domain}
          taskCardTypeName={record.taskCardTypeName}
          billOfWorkName={record.billOfWorkName}
          plannedAircraftDeliveryDate={record.plannedAircraftDeliveryDate}
          revisedAircraftDeliveryDate={record.revisedAircraftDeliveryDate}
          statusTypeName={record.statusTypeName}
          actualCheckLength={record.actualCheckLength}
          aircraftTailNumber={record.aircraftTailNumber}
        />
      );
    })}
  </div>
);

export default ResultItem;
