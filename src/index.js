import React from "react";
import ReactDOM from "react-dom";

/* import Main from "./Main";
import AdvanceSearchComponent from "./SearchCriteria/AdvanceSearchComponent"; */
import ElasticSearch from "./Components/elastic-search/elastic-search.component";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isElasticSearchComponentActive: false
    };
  }

  handleIconClick = event => {
    this.setState({
      isElasticSearchComponentActive: !this.state.isElasticSearchComponentActive
    });
  };

  render() {
    const styles = {
      btn: {
        cursor: "pointer",
        color: "white"
      }
    };
    return (
      <span>
        {/* <Main /> */}
        {/* <AdvanceSearchComponent /> */}
        <span onClick={this.handleIconClick}>
          <i className="fa fa-search fa-1-2x" style={styles.btn}></i>
        </span>
        {this.state.isElasticSearchComponentActive ? (
          <ElasticSearch handleOnClick={this.handleIconClick} />
        ) : null}
      </span>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById("top-session-react-search-component")
);
