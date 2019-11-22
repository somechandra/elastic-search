import React from "react";

import SearchCriteria from "../SearchCriteria/SearchCriteria";

class Cockpit extends React.Component {
  render() {
    const styles = {
      logo: {
        margin: "0 auto",
        color: "white",
        cursor: "pointer"
      }
    };
    return (
      <div>
        <SearchCriteria
          onChangeSearchField={() => {
            console.log("On change search field");
          }}
          onChangeDomainTypeField={() => {
            console.log("On change domain type field");
          }}
        />
        <div
          className="fa fa-1-2x fa-search"
          style={styles.logo}
          onClick={this.props.onSearchIconClick}
        />
      </div>
    );
  }
}
export default Cockpit;
