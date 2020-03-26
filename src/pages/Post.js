import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
// PrismJS
import PrismJS from "prismjs";
// Languages
import JSX from "prismjs/components/prism-jsx.min";
// Plugins
import Toolbar from "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import ShowLanguage from "prismjs/plugins/show-language/prism-show-language.min.js";
import Keywords from "prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js";
import Copy from "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import InlineColor from "prismjs/plugins/inline-color/prism-inline-color.min.js";
import LineNumbers from "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import reduxMD from "../md/redux.md";

export default class Post extends Component {
  state = {
    source: ""
  };

  componentDidMount() {
    fetch(reduxMD)
      .then(res => {
        res.text().then(text => {
          this.setState({ source: text });
          console.log(PrismJS.plugins);
          PrismJS.highlightAll();
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { source } = this.state;
    return (
      <div className="post">
        {source !== "" ? <ReactMarkdown source={source} /> : "loading..."}
      </div>
    );
  }
}
