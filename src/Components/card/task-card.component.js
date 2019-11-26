import React from "react";

import Classes from "./card.styles.css";

const TaskCard = ({ description, text, taskCardTypeName, billOfWorkName }) => (
  <div className={Classes.CardA}>
    <div className={Classes.Additional}>
      <div className={Classes.UserCard}>
        <span>TC</span>
      </div>
      <div className={Classes.MoreInfo}>
        <div className={Classes.CardTitle}>{text}</div>
        <div className={Classes.CardText}>
          {billOfWorkName} | {taskCardTypeName}
        </div>
      </div>
    </div>
    <div className={Classes.General}>
      <div className={Classes.CardTitle}>{text}</div>
      <div className={Classes.CardText}>{description}</div>
    </div>
  </div>
);

export default TaskCard;
