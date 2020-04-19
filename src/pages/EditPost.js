import React, { Component } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt(/* Markdown-it options */);

export default class EditPost extends Component {
  handleEditorChange = ({ html, text }) => {
    console.log("handleEditorChange", html, text);
  };
  render() {
    return (
      <MdEditor
        value=""
        renderHTML={(text) => mdParser.render(text)}
        onChange={this.handleEditorChange}
      />
    );
  }
}
