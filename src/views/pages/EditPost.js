import React, { Component } from "react";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";

const mdParser = new MarkdownIt(/* Markdown-it options */);

export default class EditPost extends Component {
  state = {
    text: "",
  };
  handleEditorChange = ({ text }) => {
    this.setState({ text });
  };
  render() {
    return (
      <>
        <MdEditor
          value=""
          renderHTML={(text) => mdParser.render(text)}
          onChange={this.handleEditorChange}
        />
        <pre>{this.state.text}</pre>
      </>
    );
  }
}
