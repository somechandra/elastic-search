import React from "react";

import SearchInputField from "../input-field/search-input-field.component";
import ResultItem from "../result-item/result-item.component";
import Card from "../card/card.component";

import Classes from "./advanced-search.styles.css";

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleCustomSearch: false,
      records: [],
      domainType: ""
    };
  }

  componentDidMount() {
    // fetch("http://localhost:8983/solr/COOPESA-fleetcycle/select?q=*:*")
    //   .then(response => response.json())
    //   .then(res =>
    //     this.setState({ records: res.response.docs }, () =>
    //       console.log(this.state.records)
    //     )
    //   );
  }

  toggleCustomSearch = () => {
    this.setState({ toggleCustomSearch: !this.state.toggleCustomSearch });
  };

  handleChange = e => {
    let name = e.target.value;
    fetch(
      "http://localhost:8983/solr/COOPESA-fleetcycle/select?q=namelc:*" +
        name +
        "*&rows=100"
    )
      .then(response => response.json())
      .then(res =>
        this.setState({ records: res.response.docs }, () =>
          console.log(this.state.records)
        )
      );
  };

  handleSelectChange = e => {
    console.log(e.target.value);
    this.setState({ domainType: e.target.value });
  };

  render() {
    const domainNames = [
      { label: "--All--", type: "" },
      { label: "Bill Of Work", type: "BOW" },
      { label: "Task Card", type: "TASK_CARD" }
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
        <div className={Classes.Results}>
          {this.state.records.map(record => (
            <Card
              key={record.id}
              title={record.discriminator}
              text={record.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AdvancedSearch;
