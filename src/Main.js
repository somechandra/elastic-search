import React from "react";
// import Cockpit from "./Cockpit/Cockpit";
import SearchButton from "./SearchButton";
import SearchPanel from "./SearchPanel";
import SearchResultItem from "./SearchResultItem";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPanelOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ searchPanelOpen: !this.state.searchPanelOpen });
  }

  handleLinkClick() {
    this.setState({ searchPanelOpen: false });
  }

  onSearchIconClickHandler(e) {
    console.log("Testing.......", this.state.searchPanelOpen);
    console.log(e);
    this.setState({ searchPanelOpen: !this.state.searchPanelOpen });
  }

  render() {
    const styles = {
      container: {
        position: "fixed",
        width: "40px",
        right: "35px",
        top: "5px",
        zIndex: 10000,
        textAlign: "center",
        marginRight: "1px",
        display: "block",
        cursor: "pointer",
        color: "#0097ac",
        // borderRadius: "3px",
        background: "white !important"
        // borderLeft: "2px solid #0097AC",
        // borderTop: "2px solid #0097AC",
        // borderBottom: "2px solid #0097AC",
        // padding: "6px"
      },
      logo: {
        margin: "0 auto"
      }
    };

    return (
      <div>
        {/* <Cockpit onSearchIconClick={this.onSearchIconClickHandler} /> */}
        <div style={styles.container}>
          <SearchButton
            open={this.state.searchPanelOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
          {/* <i className="fa fa-2x fa-search" style={styles.logo} /> */}
        </div>

        <SearchPanel open={this.state.searchPanelOpen}>
          <SearchResultItem key="srkey" />
        </SearchPanel>
      </div>
    );
  }
}
export default Main;
