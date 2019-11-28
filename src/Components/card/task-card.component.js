import React from "react";

import Classes from "./card.styles.css";

const TaskCard = ({
  description,
  text,
  id,
  taskCardTypeName,
  billOfWorkName,
  billOfWorkId,
  taskCardName,
  billOfWorkDiscriminator
}) => (
  <div className={Classes.CardA}>
    <div className={Classes.Additional}>
      <div className={Classes.UserCard}>
        <span>TC</span>
      </div>
      <div className={Classes.MoreInfo}>
        <div className={Classes.CardTitle}>
          {billOfWorkDiscriminator === "HeavyBOW" ? (
            <a
              href={void 0}
              onClick={() => handleTCClick(billOfWorkId, taskCardName, id)}
            >
              {text}
            </a>
          ) : (
            text
          )}
        </div>
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

const handleTCClick = (billOfWorkId, taskCardName, id) => {
  if (setBOWInSession(billOfWorkId)) {
    location.href =
      location.origin +
      "/fleetcycle/taskCardManagement/taskCardReport.do?service_lookup=" +
      "manageTaskCard&/taskCardSearchRoot/serializedObjectId=manageTaskCard" +
      "&/taskCardSearchRoot/reportKey=manageTaskCard&/taskCardSearchRoot" +
      "/searchCriteriaTaskCard/search=Search&/taskCardSearchRoot" +
      "/searchCriteriaTaskCard/billOfWorkId=" +
      billOfWorkId +
      "&/taskCardSearchRoot/searchCriteriaTaskCard/taskCardName=" +
      taskCardName +
      "&/taskCardSearchRoot/searchCriteriaTaskCard/taskCardId=" +
      id;
  }
};

const setBOWInSession = billOfWorkId => {
  var vURL =
    "/billOfWork/SetBillOfWorkIdInSession.ajax?/selectBOW/billOfWork/@billOfWorkId=" +
    billOfWorkId;
  var url = Common.computeContextRelativeURL(vURL);
  var status = AJAX.callMethod(null, url, {
    method: "GET"
  });
  return status;
};

export default TaskCard;
