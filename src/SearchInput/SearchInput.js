import React from "react";

class SearchInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        className="form-control"
        placeholder="Please type something..."
        onChange={this.props.changed}
      />
    );
  }
}
export default SearchInput;
