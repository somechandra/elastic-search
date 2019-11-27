require("es6-promise").polyfill();
require("isomorphic-fetch");

import React from "react";

import SearchInputField from "../input-field/search-input-field.component";
import ResultItem from "../result-item/result-item.component";

import Utils from "../../utils.js";

import Classes from "./advanced-search.styles.css";

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCustomSearch: false,
      records: [],
      domainType: "",
      searchText: ""
    };
  }

  toggleCustomSearch = () => {
    this.setState({ toggleCustomSearch: !this.state.toggleCustomSearch });
  };

  getURL = (domain, name) => {
    return (
      Utils.SOLR_END_POINT +
      "/" +
      Utils.COMPANY_ID +
      "-fleetcycle/select?" +
      domain +
      "&q=namelc:*" +
      name +
      "*&rows=100"
    );
  };

  getResults = (name, domainType) => {
    let domain = domainType ? "fq=domain:" + domainType : "";
    fetch(this.getURL(domain, name), {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
      .then(response => response.json())
      .then(res =>
        this.setState({ records: res.response.docs }, () =>
          console.log(this.state.records)
        )
      );
  };

  handleChange = e => {
    let name = e.target.value;
    this.setState({ searchText: name });
    this.getResults(name, this.state.domainType);
  };

  handleSelectChange = e => {
    this.setState({ domainType: e.target.value }, () => {
      this.getResults(this.state.searchText, this.state.domainType);
    });
  };

  render() {
    const domainNames = [
      { label: "--All--", type: "" },
      { label: "Bill Of Work", type: Utils.BIIL_OF_WORK },
      { label: "Task Card", type: Utils.TASK_CARD }
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
          className={[Classes.CustomSearchContainer, toggleContainer].join(" ")}
        >
          <div className={"form-group " + Classes.CustomSearchBody}>
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
        </div>
        <ResultItem records={this.state.records} />
      </div>
    );
  }
}

export default AdvancedSearch;
