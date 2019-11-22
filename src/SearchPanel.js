import React from "react";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        height: "100%",
        width: "50%",
        position: this.state.open ? "fixed" : "absolute",
        right: "40px",
        top: 0,
        zIndex: 9999,
        padding: "5px",
        transition: "height 0.5s ease",
        display: this.state.open ? "block" : "none",
        background: "#1e1f1f",
        transform: "translate3d(0px, 0px, 0px)"
      },
      menuList: {
        paddingTop: "3rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
export default SearchPanel;
