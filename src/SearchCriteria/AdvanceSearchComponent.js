import React from "react";

import classes from "./SearchCriteriaCss.css";

class AdvanceSearchComponent extends React.Component {
  render() {
    const domainNames = [
      { label: "--All--", type: "DUMMY_SELECTION" },
      { label: "Bill Of Work", type: "BOW" },
      { label: "Task Card", type: "TASK_CARD" }
    ];
    const styles = {
      skyForm: {
        border: "none"
      }
    };
    return (
      <div style={styles.skyForm}>
        <div className="row">
          <div className={"col-md-12 " + classes.esSearch}>
            <div
              className={classes.esSearchIcon + " fa fa-1-2x fa-search"}
              aria-hidden="true"
            />
            <div
              className={
                classes.esSearchComponent + " input-group " + classes.AdvSearch
              }
              id="adv-search"
            >
              <input
                type="text"
                className={"form-control " + classes.InputField}
                placeholder="Search for snippets"
              />
              <div className="input-group-btn">
                <div
                  className={"btn-group " + classes.InputGrpBtnBtnGroup}
                  role="group"
                >
                  <div
                    className={"dropdown dropdown-lg " + classes.DDDropdownLg}
                  >
                    <button
                      type="button"
                      className={
                        "btn btn-default dropdown-toggle " + classes.BtnGrpBtn
                      }
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="caret" />
                    </button>
                    <div
                      className={
                        "dropdown-menu dropdown-menu-right " +
                        classes.DropdownMenu +
                        " " +
                        classes.DDDropdownLgDDMenu
                      }
                      role="menu"
                    >
                      {/* <form className={"form-horizontal"} role={"form"}> */}
                      <div className={"form-group " + classes.FormHrztlFormGrp}>
                        <label htmlFor="filter">Select Domain Type:</label>
                        <select
                          className={"form-control " + classes.FormGrpFormCtrl}
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
                      <button
                        // type={"submit"}
                        className={
                          "btn btn-primary " +
                          classes.BtnGrpBtn +
                          " " +
                          classes.BtnGrpFormHrztlBtn
                        }
                      >
                        <span
                          className="fa fa-1-2x fa-search"
                          aria-hidden="true"
                        />
                      </button>
                      {/* </form> */}
                    </div>
                  </div>
                  <button
                    type="button"
                    className={"btn btn-primary " + classes.BtnGrpBtn}
                  >
                    <span className="fa fa-1-2x fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvanceSearchComponent;
