const Utils = {
  BIIL_OF_WORK: "billofwork",
  TASK_CARD: "taskcard",
  SOLR_END_POINT:
    process.env.NODE_ENV === "development"
      ? "http://CITHYDLTP-036:8983/solr"
      : document.getElementById("fcSolrEndPointValue").value,
  COMPANY_ID:
    process.env.NODE_ENV === "development"
      ? "COOPESA"
      : document.getElementById("fcdefaultCompanyId").value
};

export default Utils;
