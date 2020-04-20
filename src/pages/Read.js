import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
// PrismJS
import PrismJS from "prismjs";
// Languages
import "prismjs/components/prism-jsx.min";
// Plugins
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import "prismjs/plugins/inline-color/prism-inline-color.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import reduxMD from "../md/redux.md";

class Read extends Component {
  state = {
    source: "# Hello! \n ## How are ya?",
  };

  componentDidMount() {
    const { pathname } = this.props.history.location;
    const id = pathname.replace("/read", "");

    PrismJS.highlightAll();
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
const mapStateToProps = ({ posts }) => ({ posts });
export default withRouter(connect(mapStateToProps)(Read));
