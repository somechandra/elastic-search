import React from "react";

class SearchResult extends React.Component {
  render() {
    const styles = {
      container: {
        height: "100%",
        width: "300px",
        position: "fixed",
        right: "0px",
        top: "20px",
        zIndex: 9999,
        padding: "5px",
        transition: "height 0.5s ease",
        display: this.props.open ? "block" : "none",
        background: "#373a47",
        transform: "translate3d(0px, 0px, 0px)"
      },
      menuList: {
        paddingTop: "3rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.props.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default SearchResult;
