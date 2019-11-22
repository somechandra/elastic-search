import React from "react";

import AdvancedSearch from "../advanced-search/advanced-search.component";

import Classes from "./elastic-search.styles.css";

class ElasticSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div className={Classes.ElasticSearchContainer}>
        <div className={Classes.ElasticSearchHeader}>
          <div className={Classes.ElasticSearchHeaderLabel}>Advance Search</div>
          <div
            className={Classes.ElasticSearchCloseBtn}
            onClick={this.props.handleOnClick}
          >
            X
          </div>
        </div>
        <div className={Classes.ElasticSearchBody}>
          <AdvancedSearch handleChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default ElasticSearch;
