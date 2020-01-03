require("es6-promise").polyfill();
require("isomorphic-fetch");

import React from "react";

import SearchInputField from "../input-field/search-input-field.component";
import ResultItem from "../result-item/result-item.component";
import Pagination from "../pagination/pagination-component";

import Utils from "../../utils.js";

import Classes from "./advanced-search.styles.css";

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.PAGE_LIMIT = 10;
    this.START = 10;
    this.state = {
      toggleCustomSearch: false,
      records: [],
      domainType: "",
      searchText: "",
      totalRecordsCount: 0,
      currentPage: 1,
      filterBy: ""
    };
  }

  toggleCustomSearch = () => {
    this.setState({ toggleCustomSearch: !this.state.toggleCustomSearch });
  };

  getURL = (domain, name, filterBy, currentPage) => {
    const start = currentPage * this.START - this.START;
    return (
      Utils.SOLR_END_POINT +
      "/" +
      Utils.COMPANY_ID +
      "-fleetcycle/select?" +
      domain +
      filterBy +
      "&q=namelc:*" +
      name +
      "*&rows=" +
      this.PAGE_LIMIT +
      "&start=" +
      start
    );
  };

  getResults = (name, domainType, filterBy, currentPage) => {
    let domain = domainType ? "fq=domain:" + domainType : "";
    if (name) {
      fetch(this.getURL(domain, name, filterBy, currentPage), {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
        .then(response => response.json())
        .then(res =>
          this.setRecordsAndRecordsCountState(
            name,
            res.response.docs,
            res.response.numFound,
            currentPage
          )
        );
    } else {
      this.setRecordsAndRecordsCountState(name, [], 0, currentPage);
    }
  };

  setRecordsAndRecordsCountState = (name, records, count, currentPage) => {
    this.setState({
      searchText: name,
      records: records,
      totalRecordsCount: count,
      currentPage: currentPage
    });
  };

  handleChange = e => {
    const name = e.target.value;
    this.getResults(name, this.state.domainType, this.state.filterBy, 1);
  };

  handleSelectChange = e => {
    this.setState({ domainType: e.target.value }, () => {
      this.getResults(
        this.state.searchText,
        this.state.domainType,
        this.state.filterBy,
        1
      );
    });
  };

  handleFilterTypeChange = e => {
    const filterBy =
      e.target.value !== Utils.ANY_TIME
        ? "&fq=updateDate:[" +
          Utils.getDateAndTimeInISOForFilter(e.target.value) +
          " TO *]"
        : "";
    this.setState({ filterBy: filterBy }, () => {
      this.getResults(
        this.state.searchText,
        this.state.domainType,
        this.state.filterBy,
        1
      );
    });
  };

  handleOnPageChange = paginationData => {
    const { currentPage } = paginationData;
    this.getResults(
      this.state.searchText,
      this.state.domainType,
      this.state.filterBy,
      currentPage
    );
  };

  render() {
    const domainNames = [
      { label: "--All--", type: "" },
      { label: "Bill Of Work", type: Utils.BIIL_OF_WORK },
      { label: "Task Card", type: Utils.TASK_CARD }
    ];
    const filterNames = [
      { label: "Any time", type: Utils.ANY_TIME },
      { label: "Past hour", type: Utils.PAST_HOUR },
      { label: "Past 24 hours", type: Utils.PAST_24_HOURS },
      { label: "Past week", type: Utils.PAST_WEEK },
      { label: "Past month", type: Utils.PAST_MONTH },
      { label: "Past year", type: Utils.PAST_YEAR }
    ];
    const toggleContainer = this.state.toggleCustomSearch ? Classes.Show : "";
    return (
      <div className={Classes.AdvancedSearch}>
        <SearchInputField
          handleChange={this.handleChange}
          toggleCustomSearch={this.toggleCustomSearch}
          toggleContainer={this.state.toggleCustomSearch}
        />
        <div
          className={[
            "row",
            Classes.CustomSearchContainer,
            toggleContainer
          ].join(" ")}
        >
          <div
            className={"form-group " + Classes.CustomSearchBody + " col-md-6"}
          >
            <label htmlFor="filter">Select Domain Type:</label>
            <select
              className={"form-control " + Classes.SelectContainer}
              onChange={this.handleSelectChange}
            >
              {domainNames.map((obj, index) => {
                return (
                  <option key={index} value={obj.type}>
                    {obj.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            className={"form-group " + Classes.CustomSearchBody + " col-md-6"}
          >
            <label htmlFor="filter">Filter By Time:</label>
            <select
              className={"form-control " + Classes.SelectContainer}
              onChange={this.handleFilterTypeChange}
            >
              {filterNames.map((obj, index) => {
                return (
                  <option key={index} value={obj.type}>
                    {obj.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <ResultItem records={this.state.records} />
        {this.state.totalRecordsCount > 0 ? (
          <div className={Classes.PaginationCenter}>
            <Pagination
              totalRecords={this.state.totalRecordsCount}
              pageLimit={this.PAGE_LIMIT}
              pageNeighbours={1}
              currentPage={this.state.currentPage}
              onPageChanged={this.handleOnPageChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default AdvancedSearch;
