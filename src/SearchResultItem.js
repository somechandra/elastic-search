import React from "react";

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      query: null,
      peoples: [],
      data: [],
      value: "",
      timer: null
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  //   timer12 = null;

  //   handleChange = function(e) {
  //     clearTimeout(this.state.timer);
  //     let value = e.target.value;
  //     this.state.timer = setTimeout(() => {
  //       this.triggerChange(value);
  //     }, 1000);
  //   };

  //   triggerChange = targetValue => {
  //     this.setState({ value: targetValue });
  //   };

  componentDidMount() {
    this.serachPeople(this.state.query);
  }

  onChange(e) {
    this.setState({ query: e.target.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.serachPeople(this.state.query);
        }
      } else {
        this.serachPeople(this.state.query);
      }
    });
  }

  serachPeople(query) {
    //const url = "https://facebook.github.io/react-native/movies.json";
    const url =
      "https://newsapi.org/v2/everything?q=" +
      query +
      "&from=2019-04-31&sortBy=popularity&apiKey=3bee3e3e49bb410ab3acfeb61b17cd08";

    if (query) {
      console.log("url", url);
      fetch(url, {
        method: "GET"
      })
        .then(results => {
          return results.json();
        })
        .then(data => {
          let movies = data.articles;
          this.setState({ data: movies });
          console.log("state", movies);
        });
    } else {
      this.setState({ data: [] });
      console.log("state", []);
    }
  }

  render() {
    const domainNames = [
      { label: "--Select Domain Type--", type: "DUMMY_SELECTION" },
      { label: "Bill Of Work", type: "BOW" },
      { label: "Task Card", type: "TASK_CARD" }
    ];
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay
      },
      skyForm: {
        border: "none"
      },
      labelbg: {
        textAlign: "left",
        color: "white"
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      },
      redborder: {
        borderLeft: "6px solid #54C5D5",
        backgroundColor: "lightgrey",
        padding: "2px",
        margin: "2px"
      },
      fcCardReact: {
        minHeight: "15px",
        margin: "5px",
        color: "white",
        backgroundColor: "rgb(85, 85, 85)"
      },
      fcCardHeaderReact: {
        padding: "0.25rem 0.25rem",
        marginBottom: 0,
        borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
        fontSize: "14px",
        color: "rgb(0, 151, 172)",
        textAlign: "left"
      },
      fcCardBodyReact: {
        width: "100%",
        textAlign: "left",
        padding: "5px"
      }
    };
    return (
      <div style={styles.skyForm} className={"sky-form"}>
        <div className={"row"}>
          <div className={"col-md-6"}>
            <div style={styles.labelbg} className={"labelbg"}>
              Enter text:
            </div>
            <div className={"input"}>
              <input
                placeholder={"Please type text..."}
                defaultValue={this.state.value}
                onChange={this.onChange.bind(this)}
              />
            </div>
          </div>
          <div className={"col-md-6"}>
            <div style={styles.labelbg} className={"labelbg"}>
              Domain Type:
            </div>
            <div className={"select"}>
              <select
                value={domainNames[0].type}
                onChange={e => {
                  console.log(e);
                }}
              >
                {domainNames.map((obj, index) => {
                  return (
                    <option key={index} value={obj.type}>
                      {obj.label}
                    </option>
                  );
                })}
              </select>
              <i />
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-md-12"}>
            {this.state.data.map((dynamicdata, index) => (
              <div kay={index} style={styles.fcCardReact}>
                <div style={styles.fcCardHeaderReact}>
                  {dynamicdata.source.name}
                </div>
                <div style={styles.fcCardBodyReact}>{dynamicdata.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default SearchResultItem;
