import React from "react";

import AdvancedSearch from "../advanced-search/advanced-search.component";

import Classes from "./elastic-search.styles.css";

class ElasticSearch extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <AdvancedSearch />
        </div>
      </div>
    );
  }
}

export default ElasticSearch;
