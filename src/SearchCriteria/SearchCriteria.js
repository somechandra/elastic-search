import React from "react";

class SearchCriteria extends React.Component {
  render() {
    const styles = {
      searchContainer: {
        width: "400px",
        border: "none"
      }
    };
    const domainNames = [
      { label: "--Select Domain Type--", type: "DUMMY_SELECTION" },
      { label: "Bill Of Work", type: "BOW" },
      { label: "Task Card", type: "TASK_CARD" }
    ];
    return (
      <div style={styles.searchContainer} className={"sky-form"}>
        <div className={"row"}>
          <div className={"col-md-6"}>
            <div className={"input"}>
              <input
                placeholder={"Please type text..."}
                onChange={this.props.onChangeSearchField}
              />
            </div>
          </div>
          <div className={"col-md-6"}>
            <div className={"select"}>
              <select
                value={domainNames[0].type}
                onChange={this.props.onChangeDomainTypeField}
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
        </div>
      </div>
    );
  }
}

export default SearchCriteria;
