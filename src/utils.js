const Utils = {
  BIIL_OF_WORK: "billofwork",
  TASK_CARD: "taskcard",
  ANY_TIME: "anytime",
  PAST_HOUR: "pasthour",
  PAST_24_HOURS: "past24hours",
  PAST_WEEK: "pastweek",
  PAST_MONTH: "pastmonth",
  PAST_YEAR: "pastyear",
  SOLR_END_POINT:
    process.env.NODE_ENV === "development"
      ? "http://CITHYDLTP-036:8983/solr"
      : document.getElementById("fcSolrEndPointValue").value,
  COMPANY_ID:
    process.env.NODE_ENV === "development"
      ? "COOPESA"
      : document.getElementById("fcdefaultCompanyId").value
};

Utils.getDateAndTimeInISOForFilter = filterBy => {
  let d = new Date();
  switch (filterBy) {
    case Utils.PAST_HOUR:
      d.setHours(d.getHours() - 1);
      return d.toISOString();
    case Utils.PAST_24_HOURS:
      d.setDate(d.getDate() - 1);
      return d.toISOString();
    case Utils.PAST_WEEK:
      d.setDate(d.getDate() - 7);
      return d.toISOString();
    case Utils.PAST_MONTH:
      d.setMonth(d.getMonth() - 1);
      return d.toISOString();
    case Utils.PAST_YEAR:
      d.setFullYear(d.getFullYear() - 1);
      return d.toISOString();
    default:
      return "";
  }
};

export default Utils;
