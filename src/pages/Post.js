import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PrismJS from "prismjs";

import reduxMD from "../md/redux.md";

export default class Post extends Component {
  state = {
    source: ""
  };

  componentDidMount() {
    fetch(reduxMD)
      .then(res => {
        res.text().then(text => {
          console.log("HIII", text);

          this.setState({ source: text });
          PrismJS.highlightAll();
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { source } = this.state;
    return (
      <div>
        {source !== "" ? <ReactMarkdown source={source} /> : "loading..."}
      </div>
    );
  }
}
